//* Global Vars
const canvasX = 1280;
const canvasY = 700;

const bgColor = 200;

//* Player Setup
let player;
let playerS = 50;
let playerSpeed = 7;

function angleFind(_len1,_len2){
	let a = Math.acos((_len2*_len2)/(2*_len1*_len2))*(180/Math.PI);

	return 360 - (a*2)
	
}


function setup() 
{
	createCanvas(canvasX, canvasY);
	angleMode(DEGREES)

	//* Player Class
	player = new Player(600,350,playerS,playerS,playerSpeed)

	textSize(26)
}

function draw()
{
	background(bgColor);
	
	let dist1 = -dist(player.x, player.y, mouseX, mouseY)
	let dist2 = dist(player.x, dist1+player.y, mouseX, mouseY)
	let angle = angleFind(-dist1,dist2);

	let finalAngle;

	if(mouseX > player.x){
		finalAngle = angle-180;
	} else {
		finalAngle = 180+(360%angle);
	}
	
	player.draw(finalAngle);

	console.log(finalAngle);
}
