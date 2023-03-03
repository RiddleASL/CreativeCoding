
class barHoriChart{
    constructor(_posX, _posY, _width, _height, _data = []){
        //* Imported Variables
        this.posX = _posX
        this.posY = _posY
        this.width = _width
        this.height = _height
        this.data = _data

        //* Calculated Variables
        this.bars = this.makeBars(this.data)
        this.margin = 20
        this.gap = 5
        this.barHeight = ((this.height - (this.margin*2) - (this.gap*(this.bars.length-1))) / this.bars.length)
        this.blockGap = this.barHeight + this.gap
        this.ticks = 5
        this.tickGap = this.height/this.ticks
        this.numGap = this.maxNum / this.ticks

        //* Debug section
        // console.log(this.bars);
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

    getMax(_data){
        let bars = []
        _data.forEach((data,i)=>{
            bars.push(data.data[i].total)
            // console.log(data.data[i].total);
        })

        // console.log(bars);

        return Math.max(... bars)
    }

    scale(_data, _max){
        let scale = this.width / _max

        return _data * scale;
    }

    renderYear(_year1, _year2){
        stroke(0)
        let lenght = (_year2 - _year1)+1;
        let barHeight = ((this.height - (this.margin*2) - (this.gap*(lenght-1))) / lenght)
        let blockGap = barHeight + this.gap
        let index = 1;
        let years = []

        push()
        translate(this.posX, this.posY)
        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)

        this.bars.forEach(bar => {
            if(bar.year >= _year1 && bar.year <= _year2){
                years.push(bar)
            }
        })

        let max = this.getMax(years)

        this.bars.forEach((bar,i) => {
            if(bar.year >= _year1 && bar.year <= _year2){

                let color = 100 * bar.data[i].total/max

                push()
                fill(250,75,color+20)
                translate(0, (this.margin - (index*blockGap)))
                rect(0, 0, this.scale(bar.data[i].total,max),-barHeight)
                pop()

                index++;
            }
        })
        pop()
    }
}