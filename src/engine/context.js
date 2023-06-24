/**
 * Create a 2d canvas context
 * @param {number} width the canvas width in pixels
 * @param {number} height the canvas height in pixels
 * @returns {CanvasRenderingContext2D}
 */
export function getContext(parentSelector = 'body', width = 256, height = 256) {
	const parentElement = document.querySelector(parentSelector);

	if (!parentElement) {
		throw new Error('Unable to find parent element');
	}

	const canvas = document.createElement('canvas');
	parentElement.appendChild(canvas);

	const context = canvas.getContext('2d');

	if (!context) {
		throw new Error('Unable to find canvas context');
	}

	context.canvas.width = width;
	context.canvas.height = height;
	context.imageSmoothingEnabled = false;

	return context;
}

/**
 * Draw a section of an image
 * @param {CanvasRenderingContext2D} context destination context
 * @param {HTMLImageElement} image source image data
 * @param {number[]} dimensions dimensions array of the section
 * @param {number} x x coord position
 * @param {number} y y coord potition
 * @param {[number, number]} scale used for horizontal/vertical flipping
 */
export function drawFrame(
	context,
	image,
	dimensions,
	x, y,
	scale = [1, 1],
) {
	const [sourceX, sourceY, sourceWidth, sourceHeight] = dimensions;

	context.scale(scale[0], scale[1]);
	context.drawImage(
		image,
		sourceX, sourceY, sourceWidth, sourceHeight,
		x * scale[0], y * scale[1], sourceWidth, sourceHeight,
	);
	context.setTransform(1, 0, 0, 1, 0, 0);
}

/**
 * Draw a section of an image using an origin point
 * @param {CanvasRenderingContext2D} context destination context
 * @param {HTMLImageElement} image source image data
 * @param {number[]} frame the frame data array (includes both dimensions and origin point)
 * @param {number} x x coord position
 * @param {number} y y coord potition
 * @param {[number, number]} scale used for horizontal/vertical flipping
 */
export function drawFrameOrigin(context, image, frame, x, y, scale = [1, 1]) {
	const [dimensions, [originX, originY]] = frame;
	drawFrame(context, image, dimensions, x - originX * scale[0], y - originY * scale[1], scale);
}
