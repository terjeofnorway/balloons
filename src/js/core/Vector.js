class Vector{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.offX = 0;
        this.offY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.deg = 0;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    get position(){
        return {x:this.x + this.offsetX, y:this.y + this.offsetY}
    }

    set position(posArray){
        this.x = posArray[0];
        this.y = posArray[1];
    }

    set speed(speedArray){
        this.speedX = speedArray[0];
        this.speedY = speedArray[1];
    }

    get rotation(){
        return this.deg;
    }

    set rotation(rotation){
        this.deg = rotation;
    }


    set offsetX(x) {
        this.offX = x;
    }

    get offsetX() {
        return this.offX;
    }

    set offsetY(y){
        this.offY = y;
    }

    get offsetY(){
        return this.offY;
    }


    resetPositionX(pos){
        this.x = pos;
    }


}

export default Vector;
