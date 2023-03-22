class Arrow{
    constructor(xPos, yPos, color, size = 2){
        this.xPos = xPos
        this.yPos = yPos
        this.color = color
        this.size = size

        this.angle = 0
    }

    draw(){
        push()
        translate(this.xPos, this.yPos)
        scale(this.size)
        rotate(this.angle)

        //* Arrow
        stroke(0)
        beginShape()
        fill(this.color)
        vertex(-16, -4)
        vertex(-16, 4)
        vertex(0,4)
        vertex(0,8)
        vertex(10,0)
        vertex(0,-8)
        vertex(0,-4)
        vertex(-16, -4)
        endShape()

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

    calcDistance(){
        return dist(this.xPos, this.yPos, mouseX, mouseY)
    }
}