let b = 50;
let a = 110;
let timeStarted = 0;

function setup() {
	createCanvas(1100, 500);
}

function preload() {
	img0 = loadImage("Images/Hallway Basic 4.png");
	img1 = loadImage("Images/darken.png");
	img2 = loadImage("Images/Image.001.png");
	img3 = loadImage("Images/Image.002.png");
	img4 = loadImage("Images/Image.003.png");
	img5 = loadImage("Images/Image.004.png");
	img6 = loadImage("Images/Image.005.png");
	img7 = loadImage("Images/Image.006.png");
	img8 = loadImage("Images/Image.007.png");
	img9 = loadImage("Images/Image.008.png");
	img10 = loadImage("Images/Image.009.png");
	img11 = loadImage("Images/Image.010.png");
}

function draw() {
	background(5);
	let timeLapsed = millis() - timeStarted;
	imageMode(CENTER);
	let accA = a * 4;
	let accB = b * 4;

	if (timeLapsed >= 0) {
		let display = new Display(timeLapsed, a, b, img11);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
		// a = a + 110;
		// b = b + 50;
	}

	if (timeLapsed >= 175) {
		let display = new Display(timeLapsed, accA, accB, img2);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 350) {
		let display = new Display(timeLapsed, accA, accB, img3);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 525) {
		let display = new Display(timeLapsed, accA, accB, img4);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 700) {
		let display = new Display(timeLapsed, accA, accB, img5);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 875) {
		let display = new Display(timeLapsed, accA, accB, img6);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 1050) {
		let display = new Display(timeLapsed, accA, accB, img7);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 1225) {
		let display = new Display(timeLapsed, accA, accB, img8);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 1400) {
		let display = new Display(timeLapsed, accA, accB, img9);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 1575) {
		let display = new Display(timeLapsed, accA, accB, img10);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
	}

	if (timeLapsed >= 1750) {
		let display = new Display(timeLapsed, accA, accB, img11);
		accA = accA * 1.2;
		accB = accB * 1.2;
		display.run();
		// a = 1;
		// b = 1;
		timeStarted = millis();
		// redraw();
	}
}