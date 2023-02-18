
class fancyBars{
    constructor(_posX, _posY, _width, _height, _data = []){
        //* Imported Variables
        this.posX = _posX,
        this.posY = _posY,
        this.width = _width,
        this.height = _height,
        this.data = _data,

        //* Calculated Variables
        this.bars = this.data.length,
        this.xAxisH = 15,
        this.xAxisCorner = 10,
        this.margin = 20,
        this.gap = 10,
        this.barWidth = (this.width - (this.margin*2) - (this.gap*(this.bars-1))) / this.bars,
        this.blockGap = this.barWidth+this.gap
    }

    scale(_data){
        let percentage = _data.sales / _data.salesPossible;
        let height = this.height*(percentage);

        return {percentage, height}
    }

    render(){
        fill(0)
        push()
        stroke(0)
        translate(this.posX, this.posY)
        fill(20)
        rect(0, 0, this.width,this.xAxisH,this.xAxisCorner)

        let colorAngle = 360/this.bars;

        this.data.forEach((data,i)=> {
            push()
            translate(this.margin + (i*this.blockGap), 0)
            fill(40)
            rect(0,0,this.barWidth, -this.height ,0,0,20,20);
            fill(colorAngle*i,75,90)
            rect(0,0,this.barWidth,-this.scale(data).height,0,0,20,20);
            
            ellipse(this.barWidth/2, this.barWidth/2, 10, 10)

            noStroke()
            fill(100)
            text(data.name.toUpperCase(),this.barWidth/2,this.barWidth)
            text(`${data.sales}/${data.salesPossible}`,this.barWidth/2,this.barWidth*1.2)

            fill(0,0,100)
            text(`${this.scale(data).percentage*100}%`,this.barWidth/2,-this.xAxisH)
            pop()
        });

        pop()
    }
}