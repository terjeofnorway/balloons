class Sky{

    constructor(){

    }

    draw(){
        let canvasContent = document.getElementById('gamecanvas').getContext('2d'),
            height = window.innerHeight,
            width = window.innerWidth,
            gradient = canvasContent.createLinearGradient(0, 0, width, height);

        gradient.addColorStop(0, '#2484C6');
        gradient.addColorStop(1, '#91D9F8');

        canvasContent.fillStyle = gradient;
        canvasContent.fillRect(0, 0, width, height);
    }


    tick(){
        this.draw();

    }

}


export default Sky;