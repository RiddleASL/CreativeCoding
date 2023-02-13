function spinDanger(x,y,l,_armNum){
    this.x = x;
    this.y = y;
    this.l = l;
    this.armNum = _armNum

    this.angle = 360/this.armNum;
    this.arms = [];

    this.draw = function(){
        //* Create array of arms
        // for(let x=0; x < this.armNum; x++){
        //     this.arms.push(new Block(this.x,this.y,20,this.l))
        // }
    }
}