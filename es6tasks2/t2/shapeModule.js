export default class Shape {

    #color = 'red';

    constructor(_color) {
        this.#color = _color;
    }

    // properties set and get for color

    set Color(_color) {
        this.color = _color;
    }
    get Color() {
        return this.#color;
    }
    // function to print color value
    drawShape() {
        console.log(`${this.#color}`);
    }
}

