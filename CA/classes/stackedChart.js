class stackedChart{
    constructor(_posX,_posY,_width,_height,_data=[]) {
        //* Inital Variables
        this.posX = _posX,
        this.posY = _posY,
        this.width = _width,
        this.height = _height,
        this.data = _data,
        this.margin = 10,
        this.gap = 5,
        this.ticks = 5,

        //* Calculated Variables
        this.barlenght = this.barCount(this.data).lenght,
        this.widthBlock = (this.width - (this.margin+this.margin) - ((this.barlenght-1)*this.gap))/this.barlenght,
        this.topGap = this.widthBlock+this.gap,
        this.bars = this.createBlocks(this.data),
        this.maxNum = this.maxFinder(this.bars),
        this.tickGap = this.height/this.ticks,
        this.numGap = (this.maxNum/this.ticks).toFixed(0),
        this.fontSize = this.width/20,
        this.colorAngle

        console.log(this.barCount(this.data));
    }

    barCount(_data=[]){
        let string = "";
        _data.forEach((data) =>{
            if(!string.includes(data.year)){
                string += data.year
            }
        })

        return {array:string.match(/.{1,4}/g), lenght:string.match(/.{1,4}/g).length};
    }

    createBlocks(_data){
        let bars = []
        for(let x=0; x < this.barlenght; x++){
            bars.push({name: `bar${x+1}`, year:this.barCount(_data).array[x] ,data:[]})

            _data.forEach((data,i) => {
                if(data.year == this.barCount(_data).array[x]){
                    bars[x].data.push(data.value)
                }
            })
        }

        return(bars);
    }

    maxFinder(_data = []){
        let numbers = []

        _data.forEach(data => {
            let add = 0;
            data.data.forEach(number => {
                add += number
            })
            numbers.push(add)
        })

        return Math.max(...numbers)
    }

    scaleBar(_bar){
        let scale = this.height / this.maxNum;

        return _bar * scale;
    }

    render(){
        textSize(this.fontSize)

        push()
        translate(this.posX, this.posY)

        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)

        this.bars.forEach((data,i) => {
            let yMod = 0;
            this.colorAngle = 70/((data.data.length))

            push()
            translate(this.margin + (this.topGap*i),0)
            

            for (let x = 0; x < data.data.length; x++) {
                fill(200,100,this.colorAngle*x+30)
                rect(0, -yMod, this.widthBlock,-this.scaleBar(data.data[x]))
                yMod += this.scaleBar(data.data[x])
            }
            fill(0)

            // rect(0, 0, this.widthBlock,-this.scaleBar(data.data[0]))
            // rect(0, -this.scaleBar(data.data[0]), this.widthBlock,-this.scaleBar(data.data[1]))

            // push()
            //     translate(this.widthBlock/2,this.height/18)
            //     rotate(-45)
            //     textAlign(RIGHT)
            //     text(data.year, 0, 0)
            // pop()

            textAlign(CENTER)
            text(data.year, this.widthBlock/2,this.height/18)

            pop()
        });

        for (let x = 0; x < this.ticks+1; x++) {
            textAlign(RIGHT)
            text(this.numGap*x,-this.width/15,-this.tickGap*x)
            line(0,-this.tickGap*x,-this.width/25,-this.tickGap*x)
        }

        // textAlign(RIGHT)
        // text(this.numGap*(i+1),-this.width/15,-this.tickGap*(i+1))
        // line(0,-this.tickGap*(i+1),-this.width/25,-this.tickGap*(i+1))

        // text(0,-this.width/15,0)
        // line(0,0,-this.width/25,0)

        textAlign(CENTER)
        textStyle(BOLD)
        text("~ Year ~",this.width/2,this.height/5)
        pop()



        textStyle(NORMAL)
        textAlign(LEFT)
    }
}