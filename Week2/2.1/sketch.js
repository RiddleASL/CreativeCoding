//* Function to create a random integer between number given.
function randomInt(max){
  return Math.floor(Math.random()*max);
};

const lenghtOfList = 10;  //* Constant for the lenght of the list

//* Create an empty array. Then populate it with filler values
let fruitList = [];
for (let x = 0; x < lenghtOfList; x++) {
  fruitList.push({name:`Fruit${x+1}`, sales: randomInt(500)});  
}

//* List of arrays
let maxNum = Math.max(...fruitList.map(object => object.sales));  //* Gets max value from array
let blocks = fruitList.length;                                    //* Gets the lenght of fruitList array and saves it as a variable named blocks
let graphWidth = 300;                                             //* Width of the graph
let graphHeight = 300;                                            //*
let margin = 20                                                   //*
let gap = 5;                                                      //*
let canvasWidth=500;                                              //*
let canvasHeight=500;                                             //*

let colorAngle = 360/lenghtOfList;                                //*

let widthBlock =(graphWidth - (margin+margin) - ((blocks-1)*gap))/blocks; //*
let topGap = widthBlock+gap

const tickAmount = 6;
const fontSize = 22;
let tickGap = graphWidth/tickAmount;
let numGap = Math.floor(maxNum/tickAmount);

function scaleMeBaby(_num){
    let scaleValue = graphHeight/maxNum;
    return _num * scaleValue
}
function setup(){
    createCanvas(canvasWidth,canvasHeight);
    background(200);
    angleMode(DEGREES);
    rectMode(CORNER);
    colorMode(HSB, 360,100,100)
    textStyle(NORMAL);
}
function draw(){
    randomSeed(40)
 // background(200);
  fill (0,0,100);
  strokeWeight(0)
  translate((canvasWidth/2)-graphWidth/2-margin, 100)
  rotate(90)

  for(let x=0;x<fruitList.length;x++){
    push();
    translate(margin + (x*topGap), 0)
    noStroke()
    // fill(x*colorAngle, 100, 100)
    rect (0,0,widthBlock,scaleMeBaby(-fruitList[x].sales));
    pop();
  }

  fill(0)
  strokeWeight(2)
  line(0, 0, graphWidth, 0)
  line(0, 0, 0, -graphHeight)

  // rotate(-90)
  strokeWeight(2)
  for (let x = 0; x <= tickAmount; x++) {
    line(0,x*-tickGap,-10,x*-tickGap)
  }
  for (let x = 0; x <= tickAmount; x++) {
    text(x*numGap,x*+tickGap,-35)
  }

  // push()
  // textSize(fontSize)
  // rotate(-90)
  // text("Fruit Sold", graphHeight/2-25, -40)
  // pop()

  // push()
  // textSize(fontSize);
  // text("Fruits", graphWidth/2-25,50)
  // pop()
}