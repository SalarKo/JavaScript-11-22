function setup() {
	createCanvas(400, 500);
}

function draw() {
background("Moccasin");
	
	for (let y = 400; y > 10; y = y -1) {
		if (y == 9) {
			fill("orange");

		} else {
			fill("white");
		}
		//random
fill(random(0,255), random(0,255) ,random(0,255));
		circle(200, y, 12*y);

	}
}