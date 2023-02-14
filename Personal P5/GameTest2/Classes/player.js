function Player(x,y,w,h,speed=5){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;

    this.draw = function(angle){
        push()
        
        //* Draw plyer, translate, rotate
        translate(this.x, this.y-this.h)
        rotate(angle);
        rect(-this.w/2,0,this.w,this.h)

        if(keyIsDown(RIGHT_ARROW)){
            this.x += speed;
        } else if(keyIsDown(LEFT_ARROW)){
            this.x -= speed;
        }

        if(keyIsDown(DOWN_ARROW)){
            this.y += speed;
        } else if(keyIsDown(UP_ARROW)){
            this.y -= speed;
        }
        
        pop()
    }
}