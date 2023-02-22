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

        //* Calculated Variables
        this.barlenght = this.barCount(this.data).lenght
        this.widthBlock = (this.width - (this.margin+this.margin) - ((this.barlenght-1)*this.gap))/this.barlenght,
        this.topGap = this.widthBlock+this.gap,
        this.bars = this.createBlocks(this.data),
        this.maxNum = this.maxFinder(this.bars),
        this.valueNames = this.getValueNames(this.data).names,
        this.colorAngle = 360/((this.valueNames.length - 1))

        console.log(this.maxFinder(this.bars));
    }

    barCount(_data=[]){
        let string = "";
        _data.forEach((data) =>{
            if(!string.includes(data.year)){
                string += data.year + " "
            } else {

            }
        })

        return {array:string.split(" "), lenght:string.split(" ").length-1};
    }

    getValueNames(_data){
        let names = "";
        _data.forEach((data) =>{
            if(!names.includes(data.name)){
                names += data.name + ","
            }
        })

        return {names: names.split(","), lenght:names.split(",").lenght-1}
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
        

        push()
        translate(this.posX, this.posY)

        line(0, 0, this.width, 0)
        line(0, 0, 0, -this.height)

        this.bars.forEach((data,i) => {
            let yMod = 0;
            let values = "";
            push()
            translate(this.margin + (this.topGap*i),0)

            for (let x = 0; x < data.data.length; x++) {
                fill(this.colorAngle*x,100,95)
                rect(0, -yMod, this.widthBlock,-this.scaleBar(data.data[x]))
                yMod += this.scaleBar(data.data[x])
            }
            fill(0)

            // rect(0, 0, this.widthBlock,-this.scaleBar(data.data[0]))
            // rect(0, -this.scaleBar(data.data[0]), this.widthBlock,-this.scaleBar(data.data[1]))

            textAlign(CENTER)
            text(data.year, this.widthBlock/2, 20)
            pop()
        });
        pop()
    }
}