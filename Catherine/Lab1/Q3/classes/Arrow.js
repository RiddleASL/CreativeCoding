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

    rotateToCenter(){
        stroke(50)
        
        //* Draw Triangle
        line(canW/2, canH/2, this.xPos, this.yPos)
        line(canW/2, canH/2, this.xPos, canH/2)
        line(this.xPos, canH/2, this.xPos, this.yPos)

        //* Get lenght of sides
        let opp = dist(this.xPos, canH/2, this.xPos, this.yPos)
        let adj = dist(canW/2, canH/2, this.xPos, canH/2)
        let hyp = dist(canW/2, canH/2, this.xPos, this.yPos)

        //* Calculate angles relative to mouse position
        if(this.xPos >= canW/2 && this.yPos >= canH/2){
            this.angle = atan(opp/adj)+PI
        } else if(this.xPos >= canW/2 && this.yPos <= canH/2){
            this.angle = -atan(opp/adj)+PI
        } else if(this.xPos <= canW/2 && this.yPos <= canH/2){
            this.angle = atan(opp/adj)
        } else if(this.xPos <= canW/2 && this.yPos >= canH/2){
            this.angle = -atan(opp/adj)
        }
    }
}