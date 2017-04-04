import Drawable from './core/Drawable';
import Vector from './core/Vector';

class Cloud extends Drawable{
    constructor(vector = new Vector()){
        super(vector);

        this.inflate();
    }

    outOfBoundsEventHandler(){
        console.log('i am out of bounds');
        this.vector.resetPositionX(this.size[0] * -1);
    }

    inflate(){
        let asset = window.application.assetController.getAsset('cloud');
        this.graphic = asset.graphic;
        this.size = [asset.size[0] * 1.5,asset.size[1] * 1.5];

    }

}

export default Cloud;