export function distance(pointA, pointB) {
	const distanceX = pointA.x - pointB.x;
	const distanceY = pointA.y - pointB.y;

	return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

export function radians(pointA, pointB) {
	const dy = pointB.y - pointA.y;
	const dx = pointB.x - pointA.x;

	return Math.atan2(-dy, -dx);
}

export const toDegrees = (radians) => radians * 180 / Math.PI;

export const toRadians = (degrees) => degrees * Math.PI / 180;

export const clamp = (value, min, max) =>
	Math.min(Math.max(min, value), max);

export const lerp = (min, max, value) => min + value * (max - min);
