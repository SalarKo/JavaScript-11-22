let ball={}

function setup() {
	createCanvas(400, 500);
	
	ball.posX=100;
	ball.posY=0;
	
	ball.velX=0;
	ball.velY=0;
}

function draw() {
	background(100);
	
	//change speed with accelaration.
	ball.velY += 0.07;
	
	//change postions speed.
	ball.posX += ball.velX;
	ball.posY += ball.velY;
	
	//bounce
	if(ball.posY>height){
		ball.velY = -abs(ball.velY)*0.9; //the 0.9 or the *X value, makes it so it bounces less and less every time.
	}
	
	circle(ball.posX, ball.posY,20);
}