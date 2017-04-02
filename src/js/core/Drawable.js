import Vector from './Vector';

class Drawable {

    constructor(initX, initY) {
        this.vector = new Vector();
        this.vector.position = [initX, initY];
        this.graphic = '';
        this.size = [0, 0];

        window.addEventListener('TICK', this.tick.bind(this));
    }

    getDrawableObject() {
        let drw = {
            graphic: this.graphic,
            size: this.size,
            vector: this.vector
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

    tick() {
        this.updatePosition();
        this.dispatchDrawRequestEvent();
    }
}

Drawable.DRAW_REQUEST_EVENT = 'DRAW_REQUEST_EVENT';


export default Drawable;