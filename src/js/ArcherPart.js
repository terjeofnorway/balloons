import Drawable from './core/Drawable';
import Vector from './core/Vector';

class ArcherPart extends Drawable{
    constructor(vector = new Vector(), archer_part){
        super(vector);

        this.inflate(archer_part);
    }


    inflate(archer_part){
        const asset = window.application.assetController.getAsset(archer_part);
        this.graphic = asset.graphic;

        this.size = [asset.size[0] * 2.5,asset.size[1] * 2.5];

    }

}

export default ArcherPart;