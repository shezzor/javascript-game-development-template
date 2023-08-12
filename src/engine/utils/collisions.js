import { distance } from './maths.js';

/**
 * Is a point within a rectangle?
 * @param {{x: number, y: number}} point
 * @param {{x: number, y: number, width: number, height: number }} rect
 * @returns {boolean}
 */
export function pointRectangleOverlap(point, rect) {
	return (
		point.x >= rect.x &&
		point.x <= rect.x + rect.width &&
		point.y >= rect.y &&
		point.y <= rect.y + rect.height
	);
}

/**
 * Is a point within a circle?
 * @param {{x: number, y: number}} point
 * @param {{x: number, y: number, radius: number }} circle
 * @returns {boolean}
 */
export function pointCircleOverlap(point, circle) {
	return distance(point, circle) <= circle.radius;
}

/**
 * Is rectangle A overlapping rectangle B?
 * @param {{{x: number, y: number, width: number, height: number }}} rectA
 * @param {{{x: number, y: number, width: number, height: number }}} rectB
 * @returns {boolean}
 */
export function rectanglesOverlap(rectA, rectB) {
	return (
		rectA.x + rectA.width >= rectB.x &&
		rectA.x <= rectB.x + rectB.width &&
		rectA.y + rectA.height >= rectB.y &&
		rectA.y <= rectB.y + rectB.height
	);
}

/**
 * Is circle A overlapping circle B?
 * @param {{x: number, y: number, radius: number }} circleA
 * @param {{x: number, y: number, radius: number }} circleB
 * @returns {boolean}
 */
export function circlesOverlap(circleA, circleB) {
	const radii = circleA.radius + circleB.radius;

	return distance(circleA, circleB) <= radii;
}
