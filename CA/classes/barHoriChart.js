
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

    //* Get max of the datas using total as the object key
    getMax(_data){
        let bars = []
        _data.forEach((data,i)=>{
            data.data.forEach(value => {
                bars.push(value.total)
                // console.log(value.total);
            })
        })

        return Math.max(... bars)
    }

    //* Scale passed in data to the passed in max value
    scale(_data, _max){
        let scale = this.width / _max

        return _data * scale;
    }

    getTotal(_data){
        let num = 0

        _data.data.forEach(value => {
            num += value.total;
        })

        return num;
    }

    //* Render the chart between the two years given.
    renderYear(_year1, _year2){
        stroke(255)
        fill(255)
        let lenght = (_year2 - _year1)+1;
        let barHeight = ((this.height - (this.margin*2) - (this.gap*(lenght-1))) / lenght)
        let blockGap = barHeight + this.gap
        let index = 1;
        let years = []
        let totals = [];

        push()
        translate(this.posX, this.posY)
        

        //* Get a list of the years
        this.bars.forEach(bar => {
            if(bar.year >= _year1 && bar.year <= _year2){
                years.push(bar)
                totals.push(this.getTotal(bar))
            }
        })

        let max = Math.max(... totals)
        // console.log(max);

        //* loop for each of the bars given
        years.forEach((bar,i) => {

            let color = (totals[i]/max)

            push()
            fill(250,75,color+20)
            translate(0, -this.margin - ((barHeight+this.gap) * i))
            noStroke()
            rect(0, 0, this.scale(totals[i],max),-barHeight)
            pop()

            index++;

            //*Index is needed since looping through all the data makes it impracticle to use i for index
        })

        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)

        for(let x=0; x < years.length; x++){
            push()
            translate(-10,-this.height+(this.margin+(blockGap/2))+(blockGap*x))
            noStroke()
            textAlign(RIGHT)
            text(years[x].year,0,0)
            pop()
        }
        pop()
    }
}