function Block(x,y,h,w = h){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;

    this.draw = function(){
        this.updateX = x - global.diffX;
        this.updateY = y - global.diffY;

        // console.log(this.updateX)

        push();
        translate(this.updateX, this.updateY);
        rect(0,-this.h, this.w, this.h);
        pop()

        //* Collision check w/ Player
        if(player.x+player.h > this.updateX && player.x+player.h < this.updateX+10 && (player.y > this.updateY-this.h && player.y-player.h < this.updateY)){
            player.x = this.updateX-player.h
        }

        if(player.x < this.updateX+this.w && player.x > this.updateX+this.w-10 && (player.y > this.updateY-this.h && player.y-player.h < this.updateY)){
            player.x = this.updateX+this.w
        }

        if(player.y > this.updateY-this.h && player.y < this.updateY-this.h+10 && (player.x+player.h > this.updateX && player.x < this.updateX+this.w)){
            player.y = this.updateY-this.h
        }

        //* Remove this detection for a passthrough-bottom block
        if(player.y-player.h < this.updateY && player.y-player.h > this.updateY-10 && (player.x+player.h > this.updateX && player.x < this.updateX+this.w)){
            player.y = this.updateY+player.h
        }

        //* Default Vert+Hori Checks
        // if(player.x+player.h > this.x && player.x < this.x+this.w){
        //     console.log("true")
        // }

        // if(player.y > this.y-this.h && player.y-player.h < this.y){
        //     console.log("true")
        // }
    }
}