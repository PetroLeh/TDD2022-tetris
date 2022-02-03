import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.
                                    TTT
                                    ...`);

    static I_SHAPE = new Tetromino(`.....
                                    .....
                                    IIII.
                                    .....
                                    .....`);

    shape;

    constructor(shape) {
        this.shape = new RotatingShape(shape);
    }

    rotateRight() {
        return this.shape.rotateRight();
    }

    rotateLeft() {
        return this.shape.rotateLeft();
    }

    toString() {
        return this.shape.toString();
    }
}