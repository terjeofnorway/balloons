import ArcherPart from '../ArcherPart';
import Vector from '../core/Vector';
import CanvasController from '../controllers/CanvasController';

class ArcherController {
    constructor(){

        this.inflate();
    }

    inflate(){
        const localX = 50;
        const localY = CanvasController.canvasSize[1] - 330;

        const lower = new ArcherPart(new Vector(), 'archer_lower');
        const mid = new ArcherPart(new Vector(), 'archer_middle');
        const upper = new ArcherPart(new Vector(), 'archer_upper');

        upper.position = [localX - 10, localY];
        mid.position = [localX + 40, localY + 120];
        lower.position = [localX + 10, localY + 170];

    }
}


export default ArcherController;