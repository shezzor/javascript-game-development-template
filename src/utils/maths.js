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

export function toDegrees(radians) {
	return radians * 180 / Math.PI;
}

export function toRadians(degrees) {
	return degrees * Math.PI / 180;
}

export function clamp(value, min, max) {
	return Math.min(Math.max(min, value), max);
}
