import { pollGamepads, registerGamepadEvents, registerKeyEvents } from './inputHandler.js';
import { getContext } from './context.js';
import { Camera } from './Camera.js';

/**
 * Base game class that sets up and configures "all the things" for your game project
 * @abstract
 */
export class Game {
	scene;
	camera = new Camera(0, 0);

	frameTime = {
		previous: 0,
		secondsPassed: 0,
	};

	constructor(selector, width, height) {
		this.context = getContext(selector, width, height);
		this.camera.setDimentions(width, height);
	}

	frame = (time) => {
		window.requestAnimationFrame(this.frame);

		this.frameTime.secondsPassed = (time - this.frameTime.previous) / 1000;
		this.frameTime.previous = time;

		pollGamepads();
		this.scene.update(this.frameTime, this.context, this.camera);
		this.scene.draw(this.context, this.camera);
	}

	start() {
		registerKeyEvents();
		registerGamepadEvents();

		window.requestAnimationFrame(this.frame);
	}
}
