import { distance } from './maths.js';

export function pointRectangleOverlap(point, rect) {
	return (
		point.x >= rect.x &&
		point.x <= rect.x + rect.width &&
		point.y >= rect.y &&
		point.y <= rect.y + rect.height
	);
}

export function pointCircleOverlap(point, circle) {
	return distance(point, circle) <= circle.radius;
}

export function rectanglesOverlap(rectA, rectB) {
	return (
		rectA.x + rectA.width >= rectB.x &&
		rectA.x <= rectB.x + rectB.width &&
		rectA.y + rectA.height >= rectB.y &&
		rectA.y <= rectB.y + rectB.height
	);
}

export function circlesOverlap(circleA, circleB) {
	const radii = circleA.radius + circleB.radius;

	return distance(circleA, circleB) <= radii;
}
