import Circle from "./circleModule.js";

import {Rectangle, Square} from "./SquaresModule.js";

const sq = new Square(5, 10, 'yellow');
const rec = new Rectangle(10, 50, 'red');
const cr = new Circle(0, 0, 10, 'blue');

export const shapes = [sq, rec, cr];