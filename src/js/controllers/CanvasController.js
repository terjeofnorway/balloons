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
        let canvasContext = CanvasController.canvasContext;
        let drawImage = e.detail.graphic;

        canvasContext.drawImage(drawImage,e.detail.vector.position.x,e.detail.vector.position.y,e.detail.size[0],e.detail.size[1]);
    }

    static get canvasContext(){
        return document.getElementById('gamecanvas').getContext('2d');
    }

    static get canvasSize(){
        return [document.getElementById('gamecanvas').height, document.getElementById('gamecanvas').width];
    }
}

export default CanvasController;

