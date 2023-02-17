let data = []
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

	bg = color(0,0,80)
	background(bg);
	cleanTable(test,data)
	chart1 = new fancyBars(700,450,400,400,data);
	chart1.render();

	chart2 = new circlePercentage(300,300,100,200,40);
	chart2.render()
}

function draw()
{

	if(keyIsDown(UP_ARROW)){
		background(bg);
		chart2.up(1)
		chart2.render()
	} else if(keyIsDown(DOWN_ARROW)){
		background(bg);
		chart2.down(1)
		chart2.render()
	}

}

function keyPressed(){
	
}