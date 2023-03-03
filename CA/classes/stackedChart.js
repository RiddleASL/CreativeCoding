class stackedChart{
    constructor(_posX,_posY,_width,_height,_data=[]) {
        //* Inital Variables
        this.posX = _posX
        this.posY = _posY
        this.width = _width
        this.height = _height
        this.data = _data
        this.margin = 10
        this.gap = 5
        this.ticks = 5

        //* Calculated Variables
        this.bars = this.makeBars(this.data)
        this.widthBlock = (this.width - (this.margin+this.margin) - ((this.bars.length-1)*this.gap))/this.bars.length
        this.topGap = this.widthBlock+this.gap
        this.maxNum = this.maxFinder(this.bars)
        this.tickGap = this.height/this.ticks
        this.numGap = 100/this.ticks
        // this.fontSize = this.width/20
        // this.colorAngle
    }

    makeBars(_data){
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
                    bars[x].data.push({year:value.year, male:value.male, female:value.female, total:value.total})
                }
            })
        }
        return bars
    }

    maxFinder(_data = []){
        let numbers = []

        _data.forEach(data => {
            let add = 0;
            data.data.forEach(number => {
                add += number.total
            })
            numbers.push(add)
        })

        return Math.max(...numbers)
    }

    addValues(_value=[ ], _par = ''){
        let final=0;

        _value.forEach(num => {
            final += +num[_par]
        })

        return final;
    }

    scaleBar(_bar,_max){
        let scale = this.height / this.maxNum;

        return _bar * scale;
    }

    render(){
        push()
        translate(this.posX, this.posY)
        line(0,0,this.width,0)
        line(0,0,0,-this.height)
        

        this.bars.forEach((bar,i) => {
            let colorAngle = 360 / bar.data.length;
            push()
            translate(this.margin + (i*this.topGap),0)
            
            let yMod = 0;
            let dataCount = 0;
            let maleTotal = this.addValues(bar.data, "male")
            let femaleTotal = this.addValues(bar.data, "female")
            
            fill(colorAngle,100,100)
            rect(0,-yMod,this.widthBlock,this.scaleBar(-maleTotal))
            dataCount++
            yMod += this.scaleBar(maleTotal)
            fill(colorAngle*2,100,100)
            rect(0,-yMod,this.widthBlock,this.scaleBar(-femaleTotal))
            dataCount++

            pop()

            for (let x = 0; x < dataCount; x++) {
                fill(colorAngle*(x+1),100,100)
                ellipse(this.width+30, -this.height+(20*x), 10)
                fill(0)
                noStroke()
                text(Object.keys(bar.data[0])[x+1], this.width+40, -this.height+(23*x))
                stroke(0)
            }
        })

        for(let x=0; x <= this.ticks; x++){
            line(0,-this.tickGap*x,-10,-this.tickGap*x)
            textAlign(RIGHT)
            noStroke()
            text(`${this.numGap*x}%`,-15,-this.tickGap*x)
        }
        pop()
    }
}