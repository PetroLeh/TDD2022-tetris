import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.
                                    TTT
                                    ...`, 4, 0);

    static I_SHAPE = new Tetromino(`.....
                                    .....
                                    IIII.
                                    .....
                                    .....`, 2, 0);

    orientations = [];
    currentOrientation;

    constructor(shape, orientations, currentOrientation) {
        if (shape == null) {
            this.orientations = orientations;
            this.currentOrientation = (orientations.length + currentOrientation) % orientations.length;
        } else {
            shape = new RotatingShape(shape);
            this.currentOrientation = currentOrientation;
            for (let i = 0; i < orientations; i++) {
                this.orientations.push(shape);
                shape = shape.rotateRight()
            }
        }
    }

    rotateRight() {
        return new Tetromino(null, this.orientations, this.currentOrientation + 1);
    }

    rotateLeft() {
        return new Tetromino(null, this.orientations, this.currentOrientation - 1);
    }

    toString() {
        return this.orientations[this.currentOrientation].toString();
    }
}