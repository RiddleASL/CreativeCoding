function Menu(x,y,h,w){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;

    this.draw = function(){

        push();
        fill(50)
        translate(this.x, this.y)
        rect(0,-this.h,this.w,this.h)
        pop();
    }
}