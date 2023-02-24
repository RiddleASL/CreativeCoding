let exelSheet;
//* year, mP,mF,m%,mT, fP,fF,f%,fT
let data = []
let charts = []

function preload(){
	let temp = loadTable('./data/RSA.csv', 'csv', 'header', ()=> {
		data = Object.values(temp.getObject())
	});
}

function setup() 
{
	createCanvas(1280, 700);
	background(200)

	charts.push(
		new fancyBars(100,500,700,300,data)
	)
}

function draw()
{
	charts.forEach(chart => {
		chart.render();
	})

}
