import Drawable from './core/Drawable';
import Vector from './core/Vector';

class Tree extends Drawable{
    constructor(vector = new Vector()){
        super(vector);

        this.inflate();
    }

    outOfBoundsEventHandler(){
        this.vector.resetPositionX(this.size[0] * -1);
    }

    inflate(){
        let asset = window.application.assetController.getAsset('tree');
        this.graphic = asset.graphic;
        this.size = [asset.size[0] * 2.5,asset.size[1] * 2.5];

    }

}

export default Tree;