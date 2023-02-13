function Player(x,y,h,speed){
    this.x = x;
    this.y = y;
    this.h = h;
    this.defaultSpeed = speed;

    this.speedMult = 1;
    this.speedX = 0;
    this.speedY = 0;
    this.halfH = h/2;

    this.draw = function(){
        push();
        translate(this.x, this.y);
        rect(0,-this.h,this.h);
        pop();

        this.x += this.speedX;
        this.y += this.speedY;

        if(keyIsDown(LEFT_ARROW)){
            this.speedX = -this.defaultSpeed * this.speedMult;
        } else if(keyIsDown(RIGHT_ARROW)){
            this.speedX = this.defaultSpeed * this.speedMult;
        } else {
            this.speedX = 0;
        }

        if(keyIsDown(DOWN_ARROW)){
            this.speedY = this.defaultSpeed * this.speedMult;
        } else if(keyIsDown(UP_ARROW)){
            this.speedY = -this.defaultSpeed * this.speedMult;
        } else {
            this.speedY = 0;
        }

        if(keyIsDown(SHIFT)){
            this.speedMult = 1.5;
        } else {
            this.speedMult = 1;
        }
    }

        
}