var slider;
var angle;
var slider2;

function setup() {
	createCanvas(800, 800);
	slider = createSlider(0, TWO_PI, PI / 4, 0.1);
	slider2 = createSlider(0, 0.77, 0.77, 0.01);
}


function draw() {
	background(51);
	stroke(255);
	translate(height / 2, height);
	branch(150);
}


function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	angle = slider.value();
	var scl = slider2.value();
	if (len > 8) {
		push();
		rotate(angle);
		branch(len * scl);
		pop();
		push();
		rotate(-angle);
		branch(len * scl);
		pop();
	}
}
