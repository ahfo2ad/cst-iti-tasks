import Shape from "./shapeModule.js";

export class Rectangle extends Shape {

    #width = 10;
    #height = 5;

    constructor(_width, _height, _color) {
        super(_color);
        this.#width = _width;
        this.#height = _height;
        
    }

    getArea() {
        this.drawShape();
        return this.#width * this.#height;      
    }
}

export class Square extends Rectangle {

    constructor(_width, _height, _color) {    
        super(_width, _height, _color);
    }
    
}