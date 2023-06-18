import { Scene } from 'engine/Scene.js';
import { playSound } from 'engine/soundHandler.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'game/constants/game.js';
import { Logo } from 'game/entities/Logo.js';

export class TestScene extends Scene {
	music = document.getElementById('bgm');
	logo = document.getElementById('logo');
	lightness = 22;

	constructor() {
		super();

		this.logo = new Logo({ x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 }, this.handleBorderFlash);

		playSound(this.music);
	}

	handleBorderFlash = () => {
		this.lightness = 100;
	};

	drawBorder(context) {
		context.lineWidth = 4;
		context.strokeStyle = `hsl(134 90% ${this.lightness}%)`;
		context.beginPath();
		context.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
		context.stroke();
	}

	drawMessage(context) {
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		context.fillStyle = 'white';

		context.font = 'normal 30px Nunito Sans';
		context.fillText('shezzor\'s Dev Corner', SCREEN_WIDTH / 2, -15 + SCREEN_HEIGHT / 2);

		context.font = 'normal 18px Nunito Sans';
		context.fillText('Game Development Template', SCREEN_WIDTH / 2, 15 + SCREEN_HEIGHT / 2);
	}

	update(time, _, camera) {
		camera.update(time);
		this.logo.update(time);

		if (this.lightness > 22) this.lightness -= 200 * time.secondsPassed;
	}

	draw(context) {
		context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

		this.logo.draw(context);
		this.drawBorder(context);
		this.drawMessage(context);
	}
}
