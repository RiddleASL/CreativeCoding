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
	createCanvas(1280, 700);
	background(200)
	noStroke()
	angleMode()
	colorMode(HSB,360,100,100)
	textFont('G');

	//* Create barChart
	chart1 = new barVertChart(50,300,250,250,data)
	chart2 = new stackedChart(50,650,500,250,data)
	chart3 = new barHoriChart(400,300,350,250,data)
	chart4 = new pyramidChart(850,600,250,250,data)
	
	//* Render X amount of times (line density fix)
	for(let x=0; x < 3; x++){
		//* Render barChart by year
		
		chart1.renderYear(2020)
		chart2.render();
		chart3.renderYear(2010,2015);
		chart4.renderYear(2017)
	}

}

function draw()
{
	

}
