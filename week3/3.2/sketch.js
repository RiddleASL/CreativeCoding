let data = []
let fruits = [];
let charts = [];

let bg;

let test;

function cleanTable(_table, _arr){
	_table.rows.forEach((data, i) => {
		_arr.push({name:_table.rows[i].obj.name, sales:_table.rows[i].obj.sales, salesPossible:_table.rows[i].obj.salesPossible});

	});
}

function preload(){
	test = loadTable('./data/Book1.csv', 'csv', 'header');
}

function setup() 
{
	createCanvas(1280, 700);
	angleMode(DEGREES);
	rectMode(CORNER)
	colorMode(HSB, 360,100,100)

	textFont('Georgia');

	bg = color(5)
	cleanTable(test,data)

	for (let x = 0; x <5; x++) {
		fruits.push({name: `Fruit ${x+1}`, sales:Math.floor(random(1,1000))})
		
	}
	
	charts.push(
		new BarChart(250,250,700,500,6,fruits),
		new circlePercentage(125,125,50,75,4),
		new circlePercentage(1150,125,50,100,50),
		new fancyBars(200,600,400,400,data)
		)

		textAlign(CENTER)

		
}

function draw()
{
	background(bg);


	charts.forEach(chart => {
		chart.render();
	});
}

function keyPressed(){
	
}