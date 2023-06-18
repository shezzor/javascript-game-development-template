import { FPS, SCREEN_HEIGHT, SCREEN_WIDTH } from 'game/constants/game.js';
import { Entity } from 'engine/Entity.js';

const VELOCITY = FPS * 2;

export class Logo extends Entity {
	image = document.querySelector('img#logo');

	constructor(position, onRebound) {
		super(position);
		this.onRebound = onRebound;
		this.velocity = { x: VELOCITY, y: VELOCITY };
	}

	updatePosition(time) {
		this.position.x += this.velocity.x * time.secondsPassed;
		this.position.y += this.velocity.y * time.secondsPassed;
	}

	update(time) {
		this.updatePosition(time);

		const oldVelocity = { ...this.velocity };
		const { width, height } = this.image;
		if (this.position.x < 0) this.velocity.x = VELOCITY;
		if (this.position.y < 0) this.velocity.y = VELOCITY;
		if (this.position.x > SCREEN_WIDTH - width) this.velocity.x = -VELOCITY;
		if (this.position.y > SCREEN_HEIGHT - height) this.velocity.y = -VELOCITY;

		if (oldVelocity.x !== this.velocity.x || oldVelocity.y !== this.velocity.y) {
			this.onRebound();
		}
	}

	draw(context) {
		context.drawImage(this.image, Math.floor(this.position.x), this.position.y);
	}
}
