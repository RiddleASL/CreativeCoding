function degToRad(deg){
	return +(deg * (PI/180)).toFixed(5)
}

let angle = 0;
let xPoint;
let yPoint;

let playerX = 300;
let playerY = 200;

let speed = 3;
let xMod = 0;
let yMod = 0;
let speedAngle = 180;

function setup() 
{
	createCanvas(700, 400);
	rectMode(CENTER)
}

function draw()
{
	let finalAngle = degToRad(angle)
	background(200)

	xPoint = playerX +(0*Math.cos(finalAngle) - -(50*Math.sin(finalAngle)))
	yPoint = playerY +(0*Math.sin(finalAngle) + -(50*Math.cos(finalAngle)))

	push()
	translate(playerX, playerY)
	rotate(finalAngle)
	rect(0, 0, 10,20)
	pop()

	ellipse(xPoint,yPoint,5)

	if(keyIsDown(RIGHT_ARROW)){
		angle+=5
	} else if(keyIsDown(LEFT_ARROW)){
		angle-=5
	}

	if(angle > 180){
		angle -= 360
	}else if(angle < -180){
		angle += 360
	}

	if(angle > 90 && angle <= 180){
		xMod = map(angle, 90, 180, 0, 2)
	} else if (angle < -90 && angle >= -180){
		xMod = map(angle, -90, -180, 0, -2)
	}else {
		xMod = 0;
	}

	if(angle > 0 && angle < 180){
		yMod = map(angle, 0,90, 0, -2);
	} else if (angle > -180 && angle <= 0){ 
		yMod = 0
	}

	if(keyIsDown(UP_ARROW)){
		playerX += speed*((angle/90)-xMod)
		playerY -= speed*(1+(angle/90)+yMod)
	}
	if(keyIsDown(DOWN_ARROW)){
		playerX -= speed*((angle/90)-xMod)
		playerY += speed*(1+(angle/90)+yMod)
	}

	text(speed, 10, 25)


	console.log(xMod);

}
