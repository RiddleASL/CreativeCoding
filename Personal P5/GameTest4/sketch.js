let box;

function setup() 
{
	createCanvas(400, 400);
	box = new Block(100,100,50,50)
}

function draw()
{
	background(200)

	box.render()
}
