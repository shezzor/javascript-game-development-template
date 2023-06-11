/**
 * Play a HTMLAudioElement
 * @param {HTMLAudioElement} sound 
 * @param {*} options 
 */
export function playSound(sound, { volume = 1, loop } = {}) {
	sound.volume = volume;
	if (loop) sound.loop = loop;

	if (!sound.paused && sound.currentTime > 0) {
		sound.currentTime = 0;
	} else {
		sound.play();
	}
}

/**
 * Stop a playing HTMLAudioElement sound
 * @param {HTMLAudioElement} sound 
 */
export function stopSound(sound) {
	sound.pause();
	sound.currentTime = 0;
}
