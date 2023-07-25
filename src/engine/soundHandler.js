/**
 * Play a HTMLAudioElement. This will also reset the playback if it is already currently playing.
 * @param {HTMLAudioElement} sound
 * @param {{ volume: number, loop: boolean }} options
 */
export function playSound(sound, { volume = 1, loop } = {}) {
	sound.volume = volume;
	sound.loop = loop ?? sound.loop;

	if (sound.currentTime > 0) sound.currentTime = 0;
	if (sound.paused) sound.play();
}

/**
 * Stop a currently playing HTMLAudioElement, reseting its position to the beginning.
 * @param {HTMLAudioElement} sound
 */
export function stopSound(sound) {
	sound.pause();
	sound.currentTime = 0;
}
