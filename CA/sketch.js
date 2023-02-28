let exelSheet;
//* year, mP,mF,m%,mT, fP,fF,f%,fT
let data = []

let chart1;
let chart2;

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
	chart1 = new barVertChart(150,500,300,300,data)
	chart2 = new stackedChart(550,500,500,300,data)
	
	//* Render X amount of times (line density fix)
	for(let x=0; x < 3; x++){
		//* Render barChart by year
		chart1.renderYear(2020)
		chart2.render();
	}

}

function draw()
{
	

}
