let charts = []
let chart1;

let data = []

function setup() 
{
	createCanvas(1280, 700);
	background(200);
	colorMode(HSB, 360,100,100)
	
	for (let x = 0; x < 5; x++) {
		data.push(
			{name: `Object ${x+1}`, year: (2017+x)  ,value: Math.floor(random(20, 100))},
			{name: `Object ${x+1}`, year: (2017+x) ,value: Math.floor(random(20, 100))},
			{name: `Object ${x+1}`, year: (2017+x) ,value: Math.floor(random(20, 100))},

		)
	}

	chart1 = new stackedChart(300,500,300,300, data)

}

function draw()
{
	chart1.render();
}
