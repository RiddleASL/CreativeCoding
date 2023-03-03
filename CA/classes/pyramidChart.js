
class pyramidChart{
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
        this.ticks = 4
        this.tickGap = (this.width/2)/this.ticks
        this.numGap = 100 / this.ticks

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
        let max;

        let maleColor = color(200,50,100)
        let femaleColor = color(0,50,100)

        push()
        translate(this.posX, this.posY)
        line(0, 0, this.width, 0)
        line(this.width/2,0,this.width/2,-this.height)

        this.barsYear.forEach((check) => {
            if(check.year == _year){
                let barWidth = ((this.height - (this.margin*2) - (this.gap*(check.data.length-1))) / check.data.length)
                let blockGap = barWidth+this.gap

                max = this.getMax(check.data)

                check.data.forEach((bar,i) => {
                    push()
                    translate(this.width/2,-(blockGap*i)-this.margin)
                    //* Male side
                    fill(maleColor)
                    rect(0, 0, -this.scale(bar.male,max*2),-barWidth)
                    fill(0)

                    //* Female side
                    fill(femaleColor)
                    rect(0, 0, this.scale(bar.female,max*2),-barWidth)

                    fill(0)
                    noStroke()
                    textAlign(RIGHT)
                    text(bar.ageGroup,-this.width/2 - 10,-barWidth/3)
                    pop()
                })

                let keys = Object.keys((check.data)[1]);

                for(let x=0; x < 2; x++){
                    push()
                    translate(this.width,-this.height+(x*15))

                    noStroke()
                    text(keys[2+x] == "male" ? "Male" : "Female",0,0)
                    
                    stroke(0)
                    fill(keys[2+x] == "male" ? maleColor : femaleColor)
                    ellipse(-10, -5, 10)
                    pop()
                }
            }
        })

        //* Ticks left
        for(let x=0; x <= this.ticks; x++){
            push()
            translate(this.width/2-(this.tickGap*x),0)

            textAlign(CENTER)
            noStroke()
            text(`${this.numGap*x}%`,0,20)
            pop()
        }

        //* Ticks Right
        for(let x=0; x <= this.ticks; x++){
            push()
            translate(this.width/2+(this.tickGap*x),0)

            textAlign(CENTER)
            noStroke()
            text(`${this.numGap*x}%`,0,20)
            pop()
        }
        noStroke()
        textAlign(CENTER)
        textStyle(BOLD)
        text("% Injured",this.width/2,40)


        pop()
    }
}