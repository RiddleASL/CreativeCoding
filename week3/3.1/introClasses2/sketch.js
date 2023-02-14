let fruits = [23,56,74,90]

let test;

function setup() 
{
	createCanvas(1280, 700);
	background(200);
	angleMode(DEGREES);
	rectMode(CORNER)
}

function draw()
{

}

class BarChart{
	constructor(_height){
		this.height = _height;
	}
}

let chart01 = new BarChart(300);
let chart02 = new BarChart(200);