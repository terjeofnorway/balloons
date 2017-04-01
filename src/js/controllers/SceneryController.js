import Sky from '../Sky';
import Cloud from '../Cloud';


class Scenery{

    constructor(){
        this.drawLibrary = [];

        this.createSky();
        this.createClouds();

    }

    createSky(){
        let sky = new Sky();
        this.drawLibrary.push(sky);
    }

    createClouds(){
        let  cloud = new Cloud();
        this.drawLibrary.push(cloud);
    }

}




export default Scenery;