class Scenery{

    constructor(){
        this.canvasContent = document.getElementById('gamecanvas').getContext('2d');

        this.tick();

    }

    drawSky(){
        let height = window.innerHeight,
            width = window.innerWidth,
            gradient = this.canvasContent.createLinearGradient(0, 0, width, height);

        gradient.addColorStop(0, '#2484C6');
        gradient.addColorStop(1, '#91D9F8');

        this.canvasContent.fillStyle = gradient;
        this.canvasContent.fillRect(0, 0, width, height);

    }

    tick(){
        this.drawSky();
    }
}


export default Scenery;