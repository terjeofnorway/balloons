class Vector{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.speedY = 0;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    get position(){
        return {x:this.x, y:this.y}
    }

    set position(posArray){
        this.x = posArray[0];
        this.y = posArray[1];
    }

    set speed(speedArray){
        this.speedX = speedArray[0];
        this.speedY = speedArray[1];
    }


    resetPositionX(pos){
        this.x = pos;
    }


}

export default Vector;