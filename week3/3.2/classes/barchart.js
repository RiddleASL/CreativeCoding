class BarChart{
	constructor(_height, _width, _posX, _posY, _tickAmount, _data = []){
        //* Editable Data
		this.height = _height,
        this.width = _width,
        this.posX= _posX,
        this.posY = _posY,
        this.data = _data,
        this.margin = 20,
        this.gap = 5,
        this.tickAmount = _tickAmount,
        this.setRound = 100,
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
        this.finalNumGap = 5*(Math.ceil(this.numGap/4.9))
    }

    //* Scale to fit graph
    scaleMeBaby(_num){
        let scaleValue = this.height/(this.maxNum + ((this.finalNumGap*this.tickAmount)-this.maxNum));
        return _num * scaleValue
    }
    
    //* Render 
    render(){
        this.update();
        push()
        textSize(this.fontSize)
        translate(this.posX, this.posY*2)
        line(0, 0, 0,-this.height)
        line(0, 0, this.width,0)

        for (let x = 0; x <= this.tickAmount; x++) {
            stroke(0)
            line(0,x*-this.tickGap,-10,x*-this.tickGap)
            stroke(0,0,50)
            line(0,x*-this.tickGap,this.width,x*-this.tickGap)
        }
        stroke(0,0,0)
        for(let x=0;x<this.bars;x++){
            push()
            translate(this.margin + (x*this.topGap), 0)
            fill(100)
            rect (0,0,this.widthBlock,this.scaleMeBaby(-this.data[x].sales),0,0,30,30);
            pop()
        }

        strokeWeight(2)
        
        for (let x = 0; x <= this.tickAmount; x++) {
            noStroke()
            text(x*this.finalNumGap,-this.fontSize*2.5,x*-this.tickGap)
        }

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
        this.setRound = _num;
    }
}