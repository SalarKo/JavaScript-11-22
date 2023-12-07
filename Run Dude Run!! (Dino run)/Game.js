function drawGame() {

	//spawn rate of the fire
	if (random(1) < 0.01) {
		fires.push(new fire());

	}


	background("DeepSkyBlue");

	//change speed with accelaration.
	ball.velY += 1;

	//change postions speed.
	ball.posX += ball.velX;
	ball.posY += ball.velY;
	//jump only after when you hit the ground
	if (ball.posY > 325) {
		ball.velY = 0;
		ball.posY = 325;
	}
	//bg
	image(backImg, 500, 200, 1000, 390)
	//grass floor
	fill("green");
	rect(0, 400, 1000, 100);
	//the sun
	fill("yellow");
	image(sunImg, sun, 130, 200, 200)
	sun = sun - 1;
	if (sun < -500) {
		sun = 1500;
	}
	//castle
		image(castleImg, castle,350,100,100);
		castle=castle-1
		if(castle<-900){
			castle=2000;
	}
	//character
	image(ballImg, ball.posX, ball.posY+50, ball.sizeX, ball.sizeY);

	//moving and what not of the fire
	for (let f of fires) {
		f.move();
		f.show();

		circle(mouseX, mouseY, 20)
		//console.log(mouseX)


		for (let i = 0; i < fires.length; i = i + 1) {
			let distFire = dist(ball.posX,
				ball.posY,
				fires[i].x,
				fires[i].y);
			if (distFire < 100 / 2 + fires[i].size / 2) {
				state = "over"
			}

		}
	}
}