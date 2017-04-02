import CanvasController from './controllers/CanvasController';
import Drawable from './core/Drawable';

class Sky extends Drawable{

    constructor(){
        super();

    }

    /** Draw the sky background as a gradient
     * @return void
     */
    dispatchDrawRequestEvent(){
        let canvasContent = CanvasController.canvasContext,
            height = window.innerHeight,
            width = window.innerWidth,
            gradient = canvasContent.createLinearGradient(0, 0, width, height);

        gradient.addColorStop(0, '#2484C6');
        gradient.addColorStop(1, '#91D9F8');

        canvasContent.fillStyle = gradient;
        canvasContent.fillRect(0, 0, width, height);
    }


    tick(){
        this.dispatchDrawRequestEvent();
    }

}


export default Sky;