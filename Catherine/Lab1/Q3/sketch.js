let canW = 700;
let canH = 700;

let arrows = [];
let angle;

function randomNum(r1){
	return Math.floor(Math.random() * r1)
}

function setup() 
{
	createCanvas(canW, canH);
	colorMode(HSB, 360, 100, 100)
	
	// fillColor = color(100,100,100)
	// arrow = new Arrow(canW/2,canH/2, fillColor);

	for (let x = 0; x < 10; x++) {
		fillColor = color(Math.floor(Math.random() * 360), 100, 100)
		arrows.push(new Arrow(randomNum(600),randomNum(600),fillColor))
	}
}

function draw()
{
	background(80)
	stroke(0)

	//* Render & Rotate
	arrows.forEach(arrow => {
		arrow.draw()
		arrow.rotateToCenter()
	})

	//* DEUBUGGING
	// console.log(opp, adj, hyp, angle);
}
