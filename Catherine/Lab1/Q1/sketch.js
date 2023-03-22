let canW = 700;
let canH = 700;

let arrow;
let angle;

function setup() 
{
	createCanvas(canW, canH);
	

	arrow = new Arrow(canW/2,canH/2);
}

function draw()
{
	background(200)
	stroke(0)

	//* Render & Rotate
	arrow.draw()
	arrow.rotateToMouse()

	//* DEUBUGGING
	// console.log(opp, adj, hyp, angle);
}
