import ArcherPart from '../ArcherPart';
import Vector from '../core/Vector';
import CanvasController from '../controllers/CanvasController';

class ArcherController {
    constructor(){

        this.addEvents();

        this.archer = this.createArcher();
        this.aim = this.createAim();

        this.rotationLimits = {min:0, max:60}
    }

    createArcher(){
        const localX = 50;
        const localY = CanvasController.canvasSize[1] - 330;

        const lower = new ArcherPart(new Vector(), 'archer_lower');
        const mid = new ArcherPart(new Vector(), 'archer_middle');
        const upper = new ArcherPart(new Vector(), 'archer_upper');

        upper.position = [localX + 25, localY + 35];
        mid.position = [localX + 43, localY + 120];
        lower.position = [localX + 10, localY + 170];

        return {lower, mid, upper};
    }

    /** Update the archers position
     *
     */
    updateArcher(){
        this.archer.upper.vector.rotation = -this.aim.degrees;
        this.archer.upper.vector.offsetX = -this.aim.degrees / 2;
        this.archer.mid.vector.rotation = -this.aim.degrees / 3;
        this.archer.mid.vector.offsetX = -this.aim.degrees / 6;

    }

    /** Create the aim objct, setting initial aim
     *
     * @returns {{degrees: number, pull: number}}
     */
    createAim(){
        return {degrees:0, pull:-1}
    }


    /** The archers pull should slacken i not update, meaning pullAdd should reduce if
     * no spacebar has been added
     * @param degreeAdd The additional degree
     * @param pullAdd The additional pull. If
     */
    updateAim(degreeAdd = 0, pullAdd = -1){
        this.aim.degrees = Math.min(Math.max(this.aim.degrees + degreeAdd, this.rotationLimits.min),this.rotationLimits.max);
        this.aim.pull = Math.max(Math.min(this.aim.pull + pullAdd,this.rotationLimits.max), this.rotationLimits.min);

        this.updateArcher();
    }


    addEvents(){
        window.addEventListener('keydown', this.keyDownEventHandler.bind(this));
        window.addEventListener('keyup', this.keyUpEventHandler.bind(this));
    }

    releaseBow(){

    }


    keyDownEventHandler(e){
        switch(e.key){
            case 'ArrowRight':
                this.updateAim(-1);
                break;
            case 'ArrowLeft':
                this.updateAim(1);
                break;
            case ' ':
                this.updateAim(0,1);
        }
    }

    keyUpEventHandler(e){
        switch(e.key){
            case ' ':
                this.releaseBow();
        }
    }
}


export default ArcherController;
