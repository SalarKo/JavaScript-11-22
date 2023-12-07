function keyPressed() {
	if (keyCode == 32 && abs(ball.velY) < 0.1) {
		ball.velY = -17
	}



	if (keyCode == 13) {

		if (state == "intro") {
			state = "game"

		} else
		if (state == "game") {
			state = "over"
		} else
		if (state == "over") {
			state = "intro";
			fires=[];
		}
	}






}