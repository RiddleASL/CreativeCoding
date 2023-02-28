
class barVertChart{
    constructor(_posX, _posY, _width, _height, _data = []){
        //* Imported Variables
        this.posX = _posX
        this.posY = _posY
        this.width = _width
        this.height = _height
        this.data = _data

        //* Calculated Variables
        this.barsYear = this.getBarsByYear(this.data)
        this.margin = 20
        this.gap = 5
        this.barWidth = ((this.width - (this.margin*2) - (this.gap*(this.barsYear.length-1))) / this.barsYear.length)/2
        this.blockGap = 
        this.ticks = 5
        this.tickGap = this.height/this.ticks
        this.numGap = this.maxNum / this.ticks

        //* Debug section
    }

    getBarsByYear(_data){
        let years = []
        _data.forEach((values,i) => {
            if(!years.includes(values.year)){
                years.push(values.year)
            }
        })

        let bars = []
        for(let x=0; x < years.length; x++){
            bars.push({year:years[x], data:[]})
            _data.forEach(value => {
                if(years[x].includes(value.year)){
                    bars[x].data.push(value)
                }
            })
        }
        return bars
    }

    getMax(_data){
        let bars = []
        _data.forEach(data=>{
            bars.push(data.total)
        })

        return Math.max(... bars)
    }

    scale(_data, _max){
        let scale = this.height / _max

        return _data * scale;
    }

    renderYear(_year){
        stroke(0)
        let year = _year.toString()
        let max;

        push()
        translate(this.posX, this.posY)
        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)

        this.barsYear.forEach((check) => {
            if(check.year == year){
                let barWidth = ((this.width - (this.margin*2) - (this.gap*(check.data.length-1))) / check.data.length)
                let blockGap = barWidth+this.gap
                let colorShade = 100/check.data.length;
                max = this.getMax(check.data)

                check.data.forEach((bar,i) => {
                    push()
                        fill(140, 75, map(bar.total,0,max,30,100))
                        translate((this.margin + (i*blockGap)), 0)
                        rect(0, 0, barWidth, this.scale(-bar.total,max))
                        textAlign(CENTER)
                        noStroke()
                        fill(0)
                        text(bar.total,barWidth/2,this.scale(-bar.total,max)-10)

                        push()
                            textAlign(RIGHT)
                            rotate(-45)
                            text(bar.ageGroup,-5,20)
                        pop()
                    
                    pop()
                })
            }
        })

        let numGap = max / this.ticks

        for(let x=0; x <= this.ticks; x++){
            textAlign(RIGHT)
            stroke(0)
            line(0,-this.tickGap*x,-10,-this.tickGap*x)
            noStroke()
            text(Math.ceil(numGap)*x,-20,-this.tickGap*x)
        }
        pop()
    }
}