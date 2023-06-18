import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'game/constants/game.js';
import { TestScene } from 'game/scenes/TestScene.js';
import { Game } from 'engine/Game.js';

export class TemplateExample extends Game {
	scene = new TestScene(this.frameTime, this.camera);

	constructor() {
		super('body', SCREEN_WIDTH, SCREEN_HEIGHT);
	}
}
