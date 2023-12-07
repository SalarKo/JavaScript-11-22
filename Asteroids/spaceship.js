let spaceship = {};

function initSpaceship(){
	spaceship.posX = 200;
	spaceship.posY = 200;
	spaceship.size = 20;
	spaceship.farve = "green";
	spaceship.lives = 10;
}

function drawSpaceship(){
	fill(spaceship.farve);
	rect(spaceship.posX, spaceship.posY, spaceship.size, spaceship.size);
	// Movement
	if(keyIsDown(65)){
		spaceship.posX = spaceship.posX -5;
	}
	if(keyIsDown(68)){
		spaceship.posX = spaceship.posX +5
	}
	if(keyIsDown(87)){
		spaceship.posY = spaceship.posY - 5;
	}
	if(keyIsDown(83)){
		spaceship.posY = spaceship.posY + 5;
	}
}