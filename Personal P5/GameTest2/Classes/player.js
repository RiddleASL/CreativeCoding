function Player(x,y,w,h,speed=5){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;

    this.draw = function(){
        push()
        
        //* Draw plyer, translate, rotate
        translate(this.x, this.y-this.h)
        rect(0,0,this.w,this.h)

        pop()
    }
}