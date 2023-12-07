let bulletArray = [];

class Bullet {
	constructor(x, y) {
		this.posX = x;
		this.posY = y;
		this.vy = -2;
		this.vx = 0;
		this.size = 5;
		this.hit = false;
	}

	drawMe() {
		circle(this.posX, this.posY, this.size);
		
		this.posY += this.vy;
		// this.posY = this.posY + this.vy
	}

}