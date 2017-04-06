import Sky from '../Sky';
import Cloud from '../Cloud';
import Ground from '../Ground';
import Tree from '../Tree';
import CanvasController from './CanvasController';
import Vector from '../core/Vector';

class Scenery{

    constructor(){

        this.createSky();
        this.createClouds();
        this.createGround();
        this.createTreelines();
    }

    createSky(){
        let sky = new Sky();
    }

    createClouds(){

        for(let c = 0 ; c < 8 ; c++){
            const cloud = new Cloud();
            cloud.position = [Math.random() * CanvasController.canvasSize[0], (Math.random() * CanvasController.canvasSize[1] / 3)];
            cloud.speed = [Math.random() * 3, 0];
        }
    }

    createGround(){
        let ground = new Ground();
    }

    createTreelines(){
        const maxTrees = 5;
        const evenSpread = CanvasController.canvasSize[0] / maxTrees;

        for(let t = 0 ; t < maxTrees ; t++) {
            let tree = new Tree();
            tree.position = [(evenSpread * t) + (Math.random() * evenSpread) - (evenSpread / 2), CanvasController.canvasSize[1] - tree.size[1]];
        }
    }

}




export default Scenery;