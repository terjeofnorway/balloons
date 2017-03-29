import Balloon from './Balloon';
import SceneryController from './SceneryController';
import AssetsController from './AssetsController';

import Styles from '../styles/app.scss';


class Application{

    constructor(){

        this.createCanvas();
        this.setCanvasSize();

        let balloon = new Balloon();
        let assetController = new AssetsController();
        let sceneryController = new SceneryController();
    }

    createCanvas(){
        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'gamecanvas');
        document.getElementsByTagName('body')[0].appendChild(canvas);
    }

    setCanvasSize(){
        let height = window.innerHeight;
        let width = window.innerWidth;

        document.getElementById('gamecanvas').height = (height);
        document.getElementById('gamecanvas').width = (width);
    }
}

if (module.hot) {
    module.hot.accept();
}

let application = new Application();