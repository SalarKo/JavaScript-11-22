let timeToNewAsteroid = 0;
let timeBetweenNewAsteroids = 2000;

function drawGame() {

	background(100);
	
	// Vi opretter nye asteroider hver gang der er gået fx 2000 millisekunder
	// Og vi vil aldrig have flere end 20 asteroider
	if(millis() > timeToNewAsteroid && asteroidArray.length < 20){
		asteroidArray.push(new Asteroid(random(0, width),
			random(0, height),
			random(40, 60),
			random(-2, 2),
			random(-2, 2)
		));
		timeToNewAsteroid = timeToNewAsteroid + timeBetweenNewAsteroids;		
	}	
	
	// Løb gennem alle asteroider og tegn dem og flyt dem
	for (let i = 0; i < asteroidArray.length; i = i + 1) {
		asteroidArray[i].drawMe();
		asteroidArray[i].moveMe();
	}
	drawSpaceship();
	
	// Vis hvor mange liv vi har
	textSize(30);
	fill("white");
	text(spaceship.lives, 10,30);

	// Løb gennem alle bullets (bulletArray) og tegn dem (og flyt dem)
	for (let i = 0; i < bulletArray.length;i++){
		bulletArray[i].drawMe();
	}
	
	// Collision Check - Spaceship og Asteroids
	for (let i = 0; i < asteroidArray.length; i = i + 1) {
		let distAsteroideShip = dist(spaceship.posX,
			spaceship.posY,
			asteroidArray[i].posX,
			asteroidArray[i].posY);
		if (distAsteroideShip < spaceship.size / 2 + asteroidArray[i].size / 2) {
			spaceship.lives -= 1;
			//spaceship.lives = spaceship.lives - 1;
			asteroidArray.splice(i,1);
		} 		
	}
	
	// Collision check Bullets og Asteroids
	// Løb gennem samtlige asteroider
	for(let i = 0; i < asteroidArray.length; i++){
		let asLookAt = asteroidArray[i];

		// Løb gennem samtlige bullets
		for(let j = 0; j < bulletArray.length;j++){
			let buLookAt = bulletArray[j];    

			let distAsBu = dist(asLookAt.posX,
													asLookAt.posY,
													buLookAt.posX,
													buLookAt.posY);
			// Vi tjekker afstanden. size/2 for at vi kommer tæt på. 
			
			if(distAsBu < asLookAt.size/2 + buLookAt.size/2){
				asLookAt.hit = true;
				buLookAt.hit = true;
			}
			
		}
	}
	
	// Slet ramte asteroider
	for(let i = 0; i < asteroidArray.length; i++){
		if(asteroidArray[i].hit){
			asteroidArray.splice(i,1);
		}
	}
	
	for(let i = 0; i < bulletArray.length; i++){
		// Hvis en bullet er uden for skærmen - så skal den slettes
		if(bulletArray[i].posY < 0  || bulletArray[i].hit){
			bulletArray.splice(i,1);
		}
	}
	// Check if we actually delete bullets
	//console.log(bulletArray.length);
	
	if(asteroidArray.length == 0){
		tilstand = "gamewin";
	}
	if(spaceship.lives < 1){
		tilstand = "gameover";
	}

}