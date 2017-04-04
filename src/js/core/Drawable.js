import Vector from './Vector';
import CanvasController from '../controllers/CanvasController';

class Drawable extends Image{

    constructor(vector = new Vector()) {
        super();
        this.vector = vector;
        this.graphic = '';
        this.size = [0, 0];

        window.addEventListener('TICK', this.tick.bind(this));
        this.addEventListener(Drawable.OUT_OF_BOUNDS, this.outOfBoundsEventHandler.bind(this));
    }

    getDrawableObject() {
        let drw = {
            graphic: this.graphic,
            size: this.size,
            vector: this.vector,
            origin: this
        }

        return drw;
    }

    inflate() {

    }

    updatePosition() {
        this.vector.update();
    }

    /** Creates a universally drawable object that is
     * then dispatched as an event
     */
    dispatchDrawRequestEvent() {
        window.dispatchEvent(new CustomEvent(Drawable.DRAW_REQUEST_EVENT, {detail: this.getDrawableObject()}));
    }

    outOfBoundsEventHandler() {

    }

    tick() {
        this.updatePosition();
        this.dispatchDrawRequestEvent();
    }
}

Drawable.DRAW_REQUEST_EVENT = 'DRAW_REQUEST_EVENT';
Drawable.OUT_OF_BOUNDS = 'OUT_OF_BOUNDS';


export default Drawable;