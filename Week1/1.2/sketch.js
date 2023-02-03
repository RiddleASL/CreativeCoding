let data = [129,200,350,602,145,100,129,200,350,232,145,100];
let max = Math.max(...data)
let colorAngle = 360/data.length;

let numBlocks = data.length;
let chartWidth = 300;
let chartHeight = 375;
let marginLeft = 20;
let marginRight=5;
let blockGap = 10;
let screenWidth=500;
let screenHeight=500;

let blockWidth =(chartWidth - (marginLeft+marginRight) - ((numBlocks-1)*blockGap))/numBlocks;
let firstBlockxPos = ((screenWidth-chartWidth)/2)+marginLeft;
let masterGap = blockWidth+blockGap


console.log(blockWidth);

function scaleGraph(_data, _x){		//Get max in array
	let percentage = chartHeight/max;		//Get percentage of height vs max
	
	return _x * percentage;						//Calculate the scaled number(x)
}

console.log()

function setup(){
	colorMode(HSB,360,100,100)
    createCanvas(screenWidth,screenHeight);
    angleMode(DEGREES);
    rectMode(CORNER);
	noStroke();
    noLoop();
}

function draw(){
	background(100,0,60);
	for(let x=0;x<numBlocks;x++){
		let satPer = 100*(data[x]/max);
		console.log(satPer)
		fill(colorAngle*x,100,satPer+25)
		push();
		translate(firstBlockxPos + (x*masterGap), 400);
		rect (0,0,blockWidth,scaleGraph(data,-data[x]));
		pop();
	}

}