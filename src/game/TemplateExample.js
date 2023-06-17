import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants/game.js';
import { TestScene } from './scenes/TestScene.js';
import { Game } from '../engine/Game.js';

export class TemplateExample extends Game {
	scene = new TestScene(this.frameTime, this.camera);

	constructor() {
		super('body', SCREEN_WIDTH, SCREEN_HEIGHT);
	}
}
