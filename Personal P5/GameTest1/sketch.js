//* Class Setup
let player;
let playerColor;

let level1;
let blockColor;

let global;

let menu;

//* Global Variables
let canvasW = 1280;
let canvasH = 600;


function setup() 
{
	createCanvas(canvasW, canvasH);

    //* Player
    playerColor = color(255, 0, 0);
    blockColor = color(0,0,0)
    player = new Player(50,150,50,5,playerColor);

    //* Menu
    menu = new Menu(0,canvasH,70,canvasW)

    //* Level1
    level1 = new Level1(player,canvasH,canvasW);

    //* global
    global = new Global()
}

function draw()
{
    background(200)

    //* Player Run
    fill(playerColor)
    player.draw();

    //! !!! IMPORTANT: KEEP THIS ON !!!
    //* Global Run
    global.run();

    //* Level Runner
    fill(blockColor)
    level1.draw();  

    //* Menu Renderer
    menu.draw();
}
