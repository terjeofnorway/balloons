import Sky from '../Sky';
import Cloud from '../Cloud';
import CanvasController from './CanvasController';
import Vector from '../core/Vector';

class Scenery{

    constructor(){

        this.createSky();
        this.createClouds();
    }

    createSky(){
        let sky = new Sky();
    }

    createClouds(){

        for(let c = 0 ; c < 8 ; c++){
            const vector = new Vector();
            vector.position = [Math.random() * CanvasController.canvasSize[0], (Math.random() * CanvasController.canvasSize[1] / 3)];
            vector.speed = [Math.random() * 3, 0];

            const cloud = new Cloud(vector);
        }
    }

}




export default Scenery;