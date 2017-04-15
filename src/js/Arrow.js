import Drawable from './core/Drawable';

class Arrow extends Drawable{
    constructor(){
        super();

        this._gravity = .5;
        this.inflate();
    }

    setAim(aim){
        const aimRad = (90 - aim.degrees) * Math.PI/180;
        const initialSpeedY = Math.cos(aimRad) * aim.pull;
        const initialSpeedX = Math.tan(aimRad) * initialSpeedY;

        this.vector.speed = [initialSpeedX,-initialSpeedY];
    }

    outOfBoundsEventHandler(){

    }

    inflate(){
        let asset = window.application.assetController.getAsset('arrow');
        this.graphic = asset.graphic;
        this.size = [asset.size[0],asset.size[1]];


    }


}


export default Arrow;
