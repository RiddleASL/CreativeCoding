let exelSheet;
//* year, mP,mF,m%,mT, fP,fF,f%,fT
let data = []

let chart1;
let chart2;
let chart3;
let chart4;

function preload(){
	let temp = loadTable('./data/RSAFatalities.csv', 'csv', 'header', ()=> {
		let tempData = Object.values(temp.getObject())
		tempData.forEach(value => {
			data.push({year:value.year,ageGroup:value.ageGroup,male:+value.Male,female:+value.Female,total:+value.Total})
		})
	});
}

function setup() 
{
	createCanvas(900, 1200);
	background(200)
	noStroke()
	angleMode(DEGREES)
	colorMode(HSB,360,100,100)
	textFont('Georgia');

	//* Create barChart
	chart1 = new barVertChart(150,300,250,250,data)
	chart2 = new barHoriChart(525,300,350,250,data)
	chart3 = new stackedChart(50,750,500,250,data)
	chart4 = new pyramidChart(152,1100,250,250,data)
	
	//* Render X amount of times (line density fix)
	// for(let x=0; x < 3; x++){
	// 	//* Render barChart by year
		
	// 	chart1.renderYear(2020)
	// 	chart2.renderYear(2010,2015);
	// 	chart3.render()
	// 	chart4.renderYear(2017)
	// }

}

function draw()
{
	fill(262, 56, 40)
	rect(0,0,900,400)
	quad(0, 0, 900, 0, 900, 500, 450, 300)

	fill(262, 79, 29)
	rect(0,400,650,400)
	quad(0, 400, 700, 400, 900, 500, 650, 800)

	fill(226, 52, 36)
	rect(0,800,900,400)
	quad(650, 800, 900, 400, 900, 800, 900, 1000)



	chart1.renderYear(2020)
	chart2.renderYear(2010,2015);
	chart3.render()
	chart4.renderYear(2017)

	noLoop()

}
