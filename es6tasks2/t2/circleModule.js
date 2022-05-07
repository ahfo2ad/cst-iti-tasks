import Shape from "./shapeModule.js";

export default class Circle extends Shape {

    #x = 5;
    #y = 5;
    #radius = 5;

    constructor(_x, _y, _radius, _color) {
        super(_color);
        this.#x      = _x;
        this.#y      = _y;
        this.#radius = _radius;
    }
    getArea() {
        this.drawShape();
        return Math.PI * Math.pow(this.#radius, 2);
    }
}