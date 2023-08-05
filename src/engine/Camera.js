import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'game/constants/game.js';

export class Camera {
	constructor(x, y, width = SCREEN_WIDTH, height = SCREEN_HEIGHT) {
		this.position = { x, y };
		this.startPosition = { x, y };
		this.dimensions = { width, height };
	}

	reset() {
		this.position = { ...this.startPosition };
	}

	setDimensions(width, height) {
		this.dimensions = { width, height };
	}

	update() {
		if (this.position.x < 0) this.position.x = 0;
		if (this.position.y < 0) this.position.y = 0;
		if (this.position.x > this.dimensions.width - SCREEN_WIDTH) {
			this.position.x = this.dimensions.width - SCREEN_WIDTH;
		}

		if (this.position.y > this.dimensions.height - SCREEN_HEIGHT) {
			this.position.y = this.dimensions.height - SCREEN_HEIGHT;
		}
	}
}
