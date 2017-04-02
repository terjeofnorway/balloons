import Drawable from './core/Drawable';

class Cloud extends Drawable{
    constructor(initX = 0, initY = 0){
        super(initX, initY);

        console.log(initX, initY);

        this.inflate();
    }

    inflate(){
        let asset = window.application.assetController.getAsset('cloud');
        this.graphic = asset.graphic;
        this.size = asset.size;
        this.vector.speed = [1,0];
    }

}

export default Cloud;