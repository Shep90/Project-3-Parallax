class Display {
	constructor(timeLapsed, _a, _b, _image) {
		this.a = _a;
		this.b = _b;
		this.var0 = 2;
		this.image = _image;
	}

	run() {
		image(img0, 550, 250, 1100 + this.a, 500 + this.b);
		image(img0, 550, 250, 550 + (this.a / 2), 250 + (this.b / 2));
		image(img0, 550, 250, 275 + (this.a / 4), 125 + (this.b / 4));
		image(img0, 550, 250, 137.5 + (this.a / 8), 62.5 + (this.b / 8));
		image(img0, 550, 250, 68.75 + (this.a / 16), 31.25 + (this.b / 16));
		image(img0, 550, 250, 34.375 + (this.a / 32), 15.625 + (this.b / 32));
		image(img0, 550, 250, 17.1875 + (this.a / 64), 7.8125 + (this.b / 64));
		image(img1, 550, 250, 1100, 500);

		image(this.image, 550, 320, 750, 375);

		return this;

	}
}