let state;
let ball={}
let sun=0;
let castle=0;
let fires=[];


function setup() {
	createCanvas(1000, 500);
	state= "intro";
	
	//x&y values
	ball.posX=50;
	ball.posY=250;
	//speed
	ball.velX=0;
	ball.velY=0;
	//sizes
	ball.sizeX=100;
	ball.sizeY=100;
}

function draw() {
	if(state=="intro"){ 
	//two == means to compare. ie. is it true or false.
		drawIntro()
	} else
if(state=="game"){
drawGame()
}else
	if(state=="over"){
	drawOver();
	} 
}