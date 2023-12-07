class fire{
	constructor(){
		this.size=42;
		this.x=width;
		this.y=435-this.size;
	}
	//speed of fire
	move(){
		this.x -= 8;
	}
	show(){
		image(fireImg, this.x, this.y, this.size, this.size)
	}
}