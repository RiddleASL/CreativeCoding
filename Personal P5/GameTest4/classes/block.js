class Block{
    constructor(_posX,_posY,_w,_h){
        this.posX = _posX,
        this.posY = _posY,
        this.w = _w,
        this.h = _h,

        this.angle = 0,
        this.finalX = this.posX,
        this.finalY = this.posY
    }

    render(){
        push()
        translate(this.finalX, this.finalY)
        rect(0,0,this.w,this.h)
        rotate(this.angle)
        pop()

        if (mouseIsPressed){
            if((mouseX > this.posX && mouseX < this.posX + this.w) && (mouseY > this.posY && mouseY < this.posY+this.h)){
                // this.finalX = 
            }
        }
    }
}