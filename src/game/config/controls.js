import { GamepadThumbstick } from 'engine/constants/control.js';
import { Control } from 'game/constants/controls.js';

/**
 * Use this object to define the configured inputs for the available controls
 */
export const controls = [
	{
		gamePad: {
			[GamepadThumbstick.DEAD_ZONE]: 0.5,
			[GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
			[GamepadThumbstick.VERTICAL_AXE_ID]: 1,

			[Control.START]: 9,
			[Control.LEFT]: 14,
			[Control.RIGHT]: 15,
			[Control.UP]: 12,
			[Control.DOWN]: 13,
		},
		keyboard: {
			[Control.LEFT]: 'ArrowLeft',
			[Control.RIGHT]: 'ArrowRight',
			[Control.UP]: 'ArrowUp',
			[Control.DOWN]: 'ArrowDown',
			[Control.ACTION]: 'Space',
			[Control.START]: 'Enter',
			[Control.ESCAPE]: 'Escape',
		},
	},
	{
		gamePad: {
			[GamepadThumbstick.DEAD_ZONE]: 0.5,
			[GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
			[GamepadThumbstick.VERTICAL_AXE_ID]: 1,

			[Control.START]: 9,
			[Control.LEFT]: 14,
			[Control.RIGHT]: 15,
			[Control.UP]: 12,
			[Control.DOWN]: 13,
		},
		keyboard: {
			[Control.LEFT]: 'KeyF',
			[Control.RIGHT]: 'KeyH',
			[Control.UP]: 'KeyT',
			[Control.DOWN]: 'KeyG',
			[Control.ACTION]: 'Space',
			[Control.START]: 'Enter',
		},
	},
];
