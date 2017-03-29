import Sky from './Sky';

class Scenery{

    constructor(){
        this.drawLibrary = [];

        this.createSky();

        this.tick();

    }

    createSky(){
        let sky = new Sky();

        this.drawLibrary.push(sky);
    }


    tick(){
        for(let item of this.drawLibrary){
            item.tick();
        }

    }
}




export default Scenery;