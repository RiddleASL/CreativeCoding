let fruits = [];
let charts = [];
let test;

function setup() 
{
	createCanvas(1280, 700);
	angleMode(DEGREES);
	rectMode(CORNER)

	// for (let x = 0; x < 25; x++) {
	// 	charts.push(new BarChart(random(0,200)))
	// }
	for (let x = 0; x <5; x++) {
		fruits.push({name: `Fruit${x}`, sales:Math.floor(random(1,200))})
		
	}
	
	charts.push(new BarChart(300,300,100,250,6,fruits))
	// for(let x=0; x < 3; x++){
	// 	charts[0].addData(Math.floor(random(1,100)))
	// }
}

function draw()
{
	background(200);

	charts.forEach(chart => {
		chart.render();
	});
}