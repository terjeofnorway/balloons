class Vector{
    constructor(){
        this._x = 0;
        this._y = 0;
        this._offsetX = 0;
        this._offsetY = 0;
        this._speedX = 0;
        this._speedY = 0;
        this._drag = 0;
        this._gravity = 0;
        this._rotation = 0;
        this._rotationIsManual = false;
    }

    update(){
        this._speedY += this._gravity;
        this._speedX += this._drag;
        this._x += this._speedX
        this._y += this._speedY
    }

    get position(){
        return {_x:this._x + this.offsetX, _y:this._y + this.offsetY}
    }

    set position(posArray){
        this._x = posArray[0];
        this._y = posArray[1];
    }

    set speed(speedArray){
        this._speedX = speedArray[0];
        this._speedY = speedArray[1];
    }

    get rotation(){
        if(this._rotationIsManual){
            return this._rotation;
        } else {
            const rotation = -(Math.atan(this._speedX / this._speedY) / (Math.PI / 180) - 90) | 0;
            return rotation;
        }
    }

    set rotation(rotation){
        this._rotationIsManual = true;
        this._rotation = rotation;
    }


    set offsetX(x) {
        this._offsetX = x;
    }

    get offsetX() {
        return this._offsetX;
    }

    set offsetY(y){
        this._offsetY = y;
    }

    get offsetY(){
        return this._offsetY;
    }

    set gravity(gravity) {
        this._gravity = gravity;
    }

    get gravity(){
        return this._gravity;
    }

    set drag(drag){
        this._drag = drag;
    }

    get drag(){
        return this._drag;
    }

    set rotationIsManual (flag) {
        this._rotationIsManual = flag;
    }

    get rotationIsManual () {
        return this._rotationIsManual;
    }


    resetPositionX(pos){
        this._x = pos;
    }


}

export default Vector;
