import Balloon from './Balloon';
import SceneryController from './controllers/SceneryController';
import AssetsController from './controllers/AssetsController';
import CanvasController from './controllers/CanvasController';
import ArcherController from './controllers/ArcherController';
import ArrowController from './controllers/ArrowController';

import Styles from '../styles/app.scss';


class Application{

    constructor(){

        // Load the assets before continuing to set up the game
        // when all assets are loaded, the ASSETS_LOADED event gets fired from
        // the AssetsController
        this.assetController = new AssetsController();
        window.addEventListener('ASSETS_LOADED', this.initGame.bind(this));
    }


    /** Knowing that all assets are not loaded and available,
     * start setting up the canvas as well as instances of the
     * assets.
     */
    initGame(){
        this.gameCanvas = new CanvasController()
        this.gameCanvas.createCanvas();

        const sceneryController = new SceneryController();
        const archerController = new ArcherController();
        const arrowController = new ArrowController();

        this.tick();
    }

    tick(){
        window.dispatchEvent(new Event('TICK'));

        setTimeout(this.tick.bind(this),200);
    }
}


window.application = new Application();
