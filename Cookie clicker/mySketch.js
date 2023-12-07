let farve;

function setup() {
	createCanvas(400, 500);
	farve = "orange";
}

function draw() {
	background(100);
	fill(farve);
	circle(200, 200, 150);
}

function mousePressed() {
	let distance = dist(mouseX, mouseY, 200, 200);
	console.log(distance);
	if (distance < 75) {
		farve = "teal";
	}

}

function mouseReleased() {
	farve = "orange";
}