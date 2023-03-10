class BarChart{
	constructor(_height, _width, _posX, _posY, _tickAmount, _data = []){
        //* Editable Data
		this.height = _height,
        this.width = _width,
        this.posX= _posX,
        this.posY = _posY,
        this.tickAmount = _tickAmount,
        this.data = _data,
        this.margin = 20,
        this.gap = 5,
        this.round = 10,

        //* Auto-Calculated Data
        this.bars = this.data.length,
        this.maxNum = Math.max(...this.data),
        this.fontSize = this.width/13,

        //* Block width and Block gap
        this.widthBlock =(this.width - (this.margin+this.margin) - ((this.bars-1)*this.gap))/this.bars,
        this.topGap = this.widthBlock+this.gap,
        

        //* Line Tick
        this.tickGap = this.width/this.tickAmount,
        this.numGap = Math.floor(this.maxNum/this.tickAmount),
        this.finalNumGap
	}

    //* Internal Functions

    update(){
        this.maxNum = Math.max(...this.data.map(object => object.sales));
        this.bars = this.data.length;
        this.widthBlock =(this.width - (this.margin+this.margin) - ((this.bars-1)*this.gap))/this.bars;
        this.topGap = this.widthBlock+this.gap;
        this.tickGap = this.width/this.tickAmount;
        this.numGap = Math.floor(this.maxNum/this.tickAmount);
        this.finalNumGap = 10*(Math.ceil(this.numGap/9.9))
    }

    //* Scale to fit graph
    scale(_num){
        let scaleValue = this.height/(this.finalNumGap*this.tickAmount);
        return _num * scaleValue
    }
    
    //* Render 
    render(){
        fill(100)
        stroke(100)
        this.update();
        push()
        textSize(this.fontSize)
        translate(this.posX, this.posY)
        line(0, 0, 0,-this.height)
        line(0, 0, this.width,0)

        for (let x = 0; x <= this.tickAmount; x++) {
            line(0,x*-this.tickGap,-10,x*-this.tickGap)
            stroke(50)
            line(0,x*-this.tickGap,this.width,x*-this.tickGap)
            stroke(100)
        }
        for(let x=0;x<this.bars;x++){
            push()
            translate(this.margin + (x*this.topGap), 0)
            rect (0,0,this.widthBlock,this.scale(-this.data[x].sales),0,0,this.round,this.round);
            noStroke()
            text(this.data[x].sales,this.widthBlock/2,this.scale(-this.data[x].sales)-10)
            pop()
        }
        
        for (let x = 0; x <= this.tickAmount; x++) {
            noStroke()
            text(x*this.finalNumGap,-this.fontSize*2.5,x*-this.tickGap)
        }

        this.data.forEach((data,i) => {
            push()
            translate((this.widthBlock+this.bars)*(i+1),this.fontSize)
            rotate(-45)
            textAlign(RIGHT)
            noStroke()
            text(data.name,0,0)
            pop()
        })

        pop()

        
    }

    //* Value Methods
    addData(_data){
        this.data.push(_data);
    }

    setMargin(_num){
        this.margin = _num;
    }
    setGap(_num){
        this.gap = _num;
    }
    setTickAmount(_num){
        this.tickAmount = _num;
    }
    setFontSize(_num){
        this.fontSize = _num;
    }
    setRound(_num){
        this.round = _num;
    }
}