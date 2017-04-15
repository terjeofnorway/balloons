import ArcherController from './ArcherController';
import Arrow from './../Arrow';

class ArrowController{
    constructor(){
        this.addEvents();
    }

    addEvents(){
        window.addEventListener(ArcherController.AROW_RELEASE, this.arrowReleaseEventHandler.bind(this));
    }

    shootArrow(aim){
        const arrow = new Arrow();
        arrow.setAim(aim);
        arrow.vector.position = [10,400];

    }


    arrowReleaseEventHandler(e){
        this.shootArrow(e.detail.aim);
    }
}


export default ArrowController;
