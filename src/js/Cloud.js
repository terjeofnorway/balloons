import Drawable from './core/Drawable';
import Vector from './core/Vector';

class Cloud extends Drawable{
    constructor(vector = new Vector()){
        super(vector);

        this.inflate();
    }

    outOfBoundsEventHandler(){
        this.vector.resetPositionX(this.size[0] * -1);
    }

    inflate(){
        let asset = window.application.assetController.getAsset('cloud');
        this.graphic = asset.graphic;
        this.size = [asset.size[0],asset.size[1]];

    }

}

export default Cloud;
