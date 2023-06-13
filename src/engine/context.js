/**
 * Create a 2d canvas context
 * @param {number} width the canvas width in pixels
 * @param {number} height the canvas height in pixels
 * @returns {CanvasRenderingContext2D}
 */
export function getContext(parentSelector = 'body', width = 256, height = 256) {
	const parentElement = document.querySelector(parentSelector);

	if (!parentElement) {
		throw new Error('Unable to parent element');
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
 * Draw a section from an image
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLImageElement} image
 * @param {number[]} dimensions
 * @param {number} x
 * @param {number} y
 * @param {number} direction
 */
export function drawFrame(
	context,
	image,
	dimensions,
	x, y, direction = 1,
) {
	const [sourceX, sourceY, sourceWidth, sourceHeight] = dimensions;

	context.scale(direction, 1);
	context.drawImage(
		image,
		sourceX, sourceY, sourceWidth, sourceHeight,
		x * direction, y, sourceWidth, sourceHeight,
	);
	context.setTransform(1, 0, 0, 1, 0, 0);
}

/**
 * Draw a section from an image using an origin point
 * @param {CanvasRenderingContext2D} context
 * @param {HTMLImageElement} image
 * @param {number[]} frame
 * @param {number} x
 * @param {number} y
 * @param {number} direction
 */
export function drawFrameOrigin(
	context,
	image,
	frame,
	x, y,
	direction = 1,
) {
	const [dimensions, [originX, originY]] = frame;
	drawFrame(context, image, dimensions, x - originX * direction, y - originY, direction);
}
