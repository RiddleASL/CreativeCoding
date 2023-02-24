
class fancyBars{
    constructor(_posX, _posY, _width, _height, _data = []){
        //* Imported Variables
        this.posX = _posX,
        this.posY = _posY,
        this.width = _width,
        this.height = _height,
        this.data = _data,

        //* Calculated Variables
        this.bars = this.getBars(this.data).years,
        this.xAxisH = 15,
        this.xAxisCorner = 10,
        this.margin = 20,
        this.gap = 5,
        this.barWidth = ((this.width - (this.margin*2) - (this.gap*(this.bars.length-1))) / this.bars.length)/2,
        this.blockGap = this.barWidth*2+this.gap,
        this.maxNum = this.getMax(this.data),
        this.ticks = 5,
        this.tickGap = this.height/this.ticks,
        this.numGap = this.maxNum / this.ticks;
    }

    getBars(_data){
        let bars = []
        _data.forEach(data=>{
            bars.push(data.year)
        })

        return{years: bars, length: bars.length}
    }

    getMax(_data){
        let bars = []
        _data.forEach(data=>{
            bars.push(data.maleTotal)
        })

        return Math.max(... bars)
    }

    scale(_data){
        let scale = this.height / this.maxNum

        return _data * scale;
    }

    render(){
        push()
        translate(this.posX, this.posY)
        
        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)


        this.bars.forEach((bar,i) => {
            let yMod;

            push()
            translate(this.margin + (this.blockGap*i),0)
            fill(136, 177, 242)
            rect(0, 0, this.barWidth, -this.scale(this.data[i].malePassed))
            fill(242, 160, 204)
            rect(this.barWidth, 0, this.barWidth, -this.scale(this.data[i].femalePassed))

            pop()

            console.log();
        })
        
        for(let x=0; x <= this.ticks; x++){
            textAlign(RIGHT)
            line(0,-this.tickGap*x,-this.width/20,-this.tickGap*x)
            text((this.numGap*x).toFixed(0),-this.width/15,-this.tickGap*x)
        }

        pop()
    }
}