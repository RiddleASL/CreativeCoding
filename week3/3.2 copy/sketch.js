let data = []
let fruits = [];
let charts = [];
let chart1;
let chart2;

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

	bg = color(70)
	background(bg);
	cleanTable(test,data)
	// chart1 = new fancyBars(200,600,400,400,data);
	// chart1.render();

	// chart2 = new circlePercentage(125,125,50,100,4);
	// chart2.render()

	for (let x = 0; x <5; x++) {
		fruits.push({name: `Fruit ${x+1}`, sales:Math.floor(random(1,200))})
		
	}
	
	charts.push(
		new BarChart(250,250,700,25w0,6,fruits),
		new circlePercentage(125,125,50,75,4),
		new circlePercentage(1150,125,50,100,50),
		new fancyBars(200,600,400,400,data)
		)

		textAlign(CENTER)

		charts.forEach(chart => {
			chart.render();
		});
}

function draw()
{

	if(keyIsDown(UP_ARROW)){
		background(bg);
		charts[1].up(1)
		charts[2].up(1)
		charts.forEach(chart => {
			chart.render();
		});
	} else if(keyIsDown(DOWN_ARROW)){
		background(bg);
		charts[1].down(1)
		charts[2].down(1)
		charts.forEach(chart => {
			chart.render();
		});
	}

	

}

function keyPressed(){
	
}