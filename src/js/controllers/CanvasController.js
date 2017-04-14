import Drawable from '../core/Drawable';

class CanvasController{
    constructor(){

    }

    createCanvas(){
        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'gamecanvas');
        document.getElementsByTagName('body')[0].appendChild(canvas);

        window.addEventListener(Drawable.DRAW_REQUEST_EVENT, this.drawRequestEventHandler.bind(this));

        this.setCanvasSize();
    }

    setCanvasSize(){
        let height = window.innerHeight;
        let width = window.innerWidth;

        document.getElementById('gamecanvas').height = (height);
        document.getElementById('gamecanvas').width = (width);
    }

    drawRequestEventHandler(e){
        const canvasContext = CanvasController.canvasContext;
        const origin = e.detail.origin;
        let drawImage = null;

        // If the image calls for an angle, then this needs to be drawn into a separate
        // canvas as a cache before added to teh actual canvas

            drawImage = this.rotateAndCache(e.detail.graphic,e.detail.size, e.detail.localCenter, e.detail.vector.rotation);

        if(e.detail.vector.rotation != 0){
        } else {
        }
            //drawImage = e.detail.graphic;

        //Check if object is out of canvas. Send event to object, then draw object anyway.
        if(e.detail.vector.position.x > CanvasController.canvasSize[0] || e.detail.vector.position.y > CanvasController.canvasSize[1]){
            origin.dispatchEvent(new Event(Drawable.OUT_OF_BOUNDS));
        }

        canvasContext.drawImage(drawImage,e.detail.vector.position.x,e.detail.vector.position.y,e.detail.size[0],e.detail.size[1]);
    }

    rotateAndCache(image, size, localCenter, angle) {
        const offscreenCanvas = document.createElement('canvas');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        //angle = 30;

        offscreenCanvas.width = size[0];
        offscreenCanvas.height = size[1];



        offscreenCtx.translate(localCenter[0], localCenter[1]);
        offscreenCtx.rotate(angle * Math.PI/180);
        offscreenCtx.drawImage(image, -localCenter[0], -localCenter[1]);
        //offscreenCtx.rotate(-(angle * Math.PI/180));
        offscreenCtx.translate(-localCenter[0], -localCenter[1]);


        return offscreenCanvas;
    }

    static get canvasContext(){
        return document.getElementById('gamecanvas').getContext('2d');
    }

    static get canvasSize(){
        return [document.getElementById('gamecanvas').width, document.getElementById('gamecanvas').height];
    }
}

export default CanvasController;

