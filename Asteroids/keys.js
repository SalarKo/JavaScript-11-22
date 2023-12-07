function keyPressed(){
	
	if(tilstand == "game") {
		if(keyCode == 32){
			bulletArray.push(new Bullet(spaceship.posX,
																  spaceship.posY
																 ));
		}	
	}
}