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
        console.log('i am CanvasController - got this event: ', e);
    }

    static get canvasContext(){
        return document.getElementById('gamecanvas').getContext('2d');
    }
}

export default CanvasController;

