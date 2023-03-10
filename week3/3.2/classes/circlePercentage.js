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
            let angle = 100/this.dashes;
            if(x < this.percentage*(this.dashes/100)){
                strokeCol = color(270,100,100)
            } else{
                strokeCol = color(30)
            }

            rotate(360/this.dashes)
            strokeWeight(3)
            stroke(strokeCol)
            line(this.radius, this.radius, this.radius+10, this.radius+10)
        }
        noStroke()
        textSize(this.radius/1.5)
        text(`${this.percentage}%`,0,10)
        pop()
        
        
    }

    up(_num){
        this.percentage += Math.ceil(_num);
    }

    down(_num){
        this.percentage -= Math.ceil(_num);
    }
}