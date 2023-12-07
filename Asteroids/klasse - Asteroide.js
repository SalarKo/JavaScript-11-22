class Asteroid {
	constructor(x, y, s, vx, vy){
		this.posX = x;
		this.posY = y;
		this.size = s;	
		this.velX = vx;
		this.velY = vy;
		this.hit = false;
	}
	
	drawMe() {
		if(this.hit){
			fill("red");
			circle(this.posX, this.posY, this.size);
		}
		imageMode(CENTER);
		image(asteroidImg, this.posX, this.posY,this.size, this.size);
	}
	
	moveMe(){
		this.posX = this.posX + this.velX;
		this.posY = this.posY + this.velY;
		let border = 20;
		// Uden for grænserne? 
		if(this.posX > width + border) {
			this.posX = 0 - border;
		}
		if(this.posX < 0 - border){
			this.posX = width + border;
		}
		if(this.posY > height + border){
			this.posY = 0 - border;
		}
		if(this.posY < 0 - border){
			this.posY = height + border;
		}
		
	}

}