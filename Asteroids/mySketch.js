let asteroidImg;

let tilstand;

// Tom array - Vi fylder i den senere
let asteroidArray = [];


function preload() {
	asteroidImg = loadImage("asteroid.png");
}

function setup() {
	createCanvas(600, 500);
	for (let i = 0; i < 4; i = i + 1) {
		asteroidArray.push(new Asteroid(random(0, width),
			random(0, height),
			random(40, 60),
			random(-2, 2),
			random(-2, 2)
		));
	}
	//console.log(asteroidArray);
	tilstand = "game";

	initSpaceship();
}

function draw() {
	if (tilstand == "game") {
		drawGame();
	} else
	if (tilstand == "gameover") {
		drawGameOver();
	} else
	if (tilstand == "gamewin") {
		drawGameWin();
	}


}