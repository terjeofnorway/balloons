class Drawable {

    constructor(){
        this.velocity = [0,0];
        this.graphic = '';
        this.size = [0,0];

        window.addEventListener('TICK', this.tick.bind(this));
    }

    getDrawableOBject(){
        let drw = {
            graphic:this.graphic,
            size:this.size,
            velocity: this.velocity
        }

        return drw;
    }

    inflate(){

    }

    /** Creates a universally drawable object that is
     * then dispatched as an event
     */
    dispatchDrawRequestEvent(){
        //this  drawObject = this.getDrawableObject();
    }

    tick(){
        this.dispatchDrawRequestEvent();

    }
}

Drawable.DRAW_REQUEST_EVENT = 'DRAW_REQUEST_EVENT';



export default Drawable;