import Sky from '../Sky';
import Cloud from '../Cloud';
import CanvasController from './CanvasController';


class Scenery{

    constructor(){

        this.createSky();
        this.createClouds();
    }

    createSky(){
        let sky = new Sky();
    }

    createClouds(){

        for(let c = 0 ; c < 4 ; c++){
            let  cloud = new Cloud(Math.random() * CanvasController.canvasSize[0], (Math.random() * CanvasController.canvasSize[1] / 2));
        }
    }

}




export default Scenery;