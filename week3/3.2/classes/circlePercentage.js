class circlePercentage{
    constructor(_posX, _posY, _radius,_dashes,_percentage) {
        //* Initial Varibales
        this.posX = _posX,
        this.posY = _posY,
        this.radius = _radius,
        this.percentage = _percentage,
        this.dashes = _dashes
    }

    render(){
        if(this.percentage >= 100){
            this.percentage = 100;
        } else if(this.percentage <= 0){
            this.percentage = 0;
        }

        push()
        translate(this.posX, this.posY)
        for (let x = 0; x < this.dashes; x++) {
            let strokeCol;
            let angle = 360/this.percentage;
            if(x < this.percentage*(this.dashes/100)){
                strokeCol = color(angle*x,100,100)
            } else{
                strokeCol = color(0,0,0)
            }

            rotate(360/this.dashes)
            strokeWeight(3)
            stroke(strokeCol)
            line(this.radius, this.radius, this.radius+(this.radius/2), this.radius+10)
        }
        console.log(this.percentage);
        noStroke()
        textSize(this.radius/1.5)
        text(`${this.percentage}%`,-this.radius/1.5,10)
        pop()
        
        
    }

    up(_num){
        this.percentage += Math.ceil(_num*(100/this.dashes));
    }

    down(_num){
        this.percentage -= Math.ceil(_num*(100/this.dashes));
    }
}