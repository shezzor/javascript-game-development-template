import { GamepadThumbstick } from './constants/control.js';
import { Control } from '../game/constants/controls.js';
import { Camera } from './Camera.js';

export type ValueOf<T> = T[keyof T];

export type ControlConfig<T> = {
	gamePad: Partial<(Record<ValueOf<typeof Control>, number> | Record<ValueOf<typeof GamepadThumbstick>, number>)>;
	keyboard: Partial<Record<ValueOf<typeof Control>, string>>;
}

export type GameTime = {
	previous: number,
	secondsPassed: number,
};

export type Position = {
	x: number,
	y: number,
};

export type Rect = {
	x: number,
	y: number,
	width: number,
	height: number,
};

export type Tile = {
	row: number,
	column: number,
};

export type FrameDimensions = readonly [number, number, number, number];
export type FrameOrigin = readonly [number, number];
export type FrameData = readonly [FrameDimensions, FrameOrigin]
export type FrameDataMap = Map<string, FrameData>;

export type AnimationFrame = readonly [string, number];

export type onSceneEndHandler<T> = (newScene: ValueOf<T>) => void;

export interface Updateable {
	update(time: GameTime, context?: CanvasRenderingContext2D, camera?: Camera): void;
}

export interface Drawable {
	draw(context: CanvasRenderingContext2D, camera?: Camera): void;
}

export interface Scene<T> extends Updateable, Drawable {
	onEnd: onSceneEndHandler<T>;
	cleanUp(): void;
}

export interface Entity extends Updateable, Drawable {
	position: Position;
	animationFrame: number;
	animationTimer: DOMHighResTimeStamp;

	image: HTMLImageElement;
}
