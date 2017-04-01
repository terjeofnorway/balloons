import Drawable from './core/Drawable';

class Cloud extends Drawable{
    constructor(){
        super();

        this.inflate();
    }

    inflate(){
        let asset = window.application.assetController.getAsset('cloud');
        this.graphic = new Image();
        this.graphic.src = asset.url;
        this.size = [100,100];
    }

    dispatchDrawRequestEvent(){
        window.dispatchEvent(new Event(Drawable.DRAW_REQUEST_EVENT));



    }

    tick(){
        //1. Move object one single tick
        this.dispatchDrawRequestEvent();
    }
}

export default Cloud;