function Global(){
    this.horiLimit = 3000;
    this.vertLimit = 2000;

    this.camRight = 1000;
    this.camLeft = 200;
    this.camUp = 100;
    this.camDown = canvasH-menu.h;
    this.diffX = 0;
    this.diffY = 0;

    this.run = function(){
        //* Player HoriChecker
        if(player.x < 0){
            player.x = 0;
        } else if (player.x+this.diffX > this.horiLimit){
            player.x = this.camRight + (canvasW - this.camRight) - player.h;
        }

        //* Player VertChecker
        if(player.y-player.h < 0){
            player.y = player.h;
        } else if(player.y+this.diffY > this.vertLimit-100){
            player.y = this.camDown + (canvasH - this.camDown)-100;
        }



        //* Player Tracker
        if(player.x+player.h > this.camRight && keyIsDown(RIGHT_ARROW) && player.x+this.diffX < this.horiLimit - (canvasW - this.camRight)){
            player.x = this.camRight-player.h;
            this.diffX += player.defaultSpeed * player.speedMult;
        } else if(this.diffX > 0 && keyIsDown(LEFT_ARROW) && player.x < this.camLeft){
            player.x = this.camLeft;
            this.diffX -= player.defaultSpeed * player.speedMult;
        }

        if(player.y > this.camDown && keyIsDown(DOWN_ARROW) && player.y+this.diffY < this.vertLimit - (canvasH - this.camDown)){
            player.y = this.camDown
            this.diffY += player.defaultSpeed * player.speedMult;
        } else if(this.diffY > 0 && keyIsDown(UP_ARROW) && player.y-player.h < this.camUp){
            player.y = this.camUp+player.h;
            this.diffY -= player.defaultSpeed * player.speedMult;
        }

        // console.log(this.diffY + player.y);
    }
}