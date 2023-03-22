class Arrow{
    constructor(xPos, yPos, size = 2){
        this.xPos = xPos
        this.yPos = yPos
        this.size = size

        this.angle = 0
    }

    drawOnCenter(){
        push()
        translate(this.xPos, this.yPos)
        scale(this.size)
        rotate(this.angle)

        //* Arrow
        line(-16, -4, -16, 4)
        line(-16,-4,0,-4)
        line(-16,4,0,4)

        line(0,-4,0,-8)
        line(0,4,0,8)

        line(0,8,10,0)
        line(0,-8,10,0)   

        pop()

    }

    drawOnMouse(){
        push()
        translate(mouseX, mouseY)
        scale(this.size)
        rotate(this.angle)

        //* Arrow
        line(-16, -4, -16, 4)
        line(-16,-4,0,-4)
        line(-16,4,0,4)

        line(0,-4,0,-8)
        line(0,4,0,8)

        line(0,8,10,0)
        line(0,-8,10,0)   

        pop()

    }

    rotateToMouse(){
        stroke(50)
        
        //* Draw Triangle
        line(this.xPos, this.yPos, mouseX, mouseY)
        line(this.xPos, this.yPos, mouseX, this.yPos)
        line(mouseX, this.yPos, mouseX, mouseY)

        //* Get lenght of sides
        let opp = dist(mouseX, this.yPos, mouseX, mouseY)
        let adj = dist(this.xPos, this.yPos, mouseX, this.yPos)
        let hyp = dist(this.xPos, this.yPos, mouseX, mouseY)

        //* Calculate angles relative to mouse position
        if(mouseX >= this.xPos && mouseY >= this.yPos){
            this.angle = atan(opp/adj)
        } else if(mouseX >= this.xPos && mouseY <= this.yPos){
            this.angle = -atan(opp/adj)
        } else if(mouseX <= this.xPos && mouseY <= this.yPos){
            this.angle = atan(opp/adj)-PI
        } else if(mouseX <= this.xPos && mouseY >= this.yPos){
            this.angle = -atan(opp/adj)-PI
        }
    }

    rotateToMouse(){
        stroke(50)
        
        //* Draw Triangle
        line(this.xPos, this.yPos, mouseX, mouseY)
        line(this.xPos, this.yPos, mouseX, this.yPos)
        line(mouseX, this.yPos, mouseX, mouseY)

        //* Get lenght of sides
        let opp = dist(mouseX, this.yPos, mouseX, mouseY)
        let adj = dist(this.xPos, this.yPos, mouseX, this.yPos)
        let hyp = dist(this.xPos, this.yPos, mouseX, mouseY)

        //* Calculate angles relative to mouse position
        if(mouseX >= this.xPos && mouseY >= this.yPos){
            this.angle = atan(opp/adj)+PI
        } else if(mouseX >= this.xPos && mouseY <= this.yPos){
            this.angle = -atan(opp/adj)+PI
        } else if(mouseX <= this.xPos && mouseY <= this.yPos){
            this.angle = atan(opp/adj)
        } else if(mouseX <= this.xPos && mouseY >= this.yPos){
            this.angle = -atan(opp/adj)
        }
    }

    rotateToLeftCorner(){
        stroke(50)
        
        //* Draw Triangle
        line(0, 0, mouseX, mouseY)
        line(0, 0, mouseX, 0)
        line(mouseX, 0, mouseX, mouseY)

        //* Get lenght of sides
        let opp = dist(mouseX, 0, mouseX, mouseY)
        let adj = dist(0, 0, mouseX, 0)
        let hyp = dist(0, 0, mouseX, mouseY)

        //* Calculate angles relative to mouse position
        if(mouseX >= 0 && mouseY >= 0){
            this.angle = atan(opp/adj)+PI
        } else if(mouseX >= 0 && mouseY <= 0){
            this.angle = -atan(opp/adj)+PI
        } else if(mouseX <= 0 && mouseY <= 0){
            this.angle = atan(opp/adj)
        } else if(mouseX <= 0 && mouseY >= 0){
            this.angle = -atan(opp/adj)
        }
    }
}