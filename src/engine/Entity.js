/**
 * Base class for any Entity used within the game
 * @abstract
 */
export class Entity {
	position = { x: 0, y: 0 };
	velocity = { x: 0, y: 0 };

	animationFrame = 0;
	animationTimer = 0;

	image = new Image();

	constructor(position) {
		this.position = position;
	}
}
