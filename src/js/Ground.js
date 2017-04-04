import Drawable from './core/Drawable';
import Vector from './core/Vector';
import CanvasController from './controllers/CanvasController';

class Ground extends Drawable{
    constructor(vector = new Vector()){
        super(vector);

        this.inflate();
    }

    outOfBoundsEventHandler(){

    }

    inflate(){
        let asset = window.application.assetController.getAsset('ground');
        this.graphic = asset.graphic;
        this.size = asset.size;
        this.vector.position = [0,CanvasController.canvasSize[1] - this.size[1]]


    }

}

export default Ground;