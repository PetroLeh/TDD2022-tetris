export class RotatingShape {
    shape = [];
    size;

    constructor(shape) {
        shape = shape.replaceAll(" ", "").trim().split("\n");
        this.size = shape.length - 1;      
        for (let i = 0; i < shape.length; i++) {
            this.shape[i] = Array.from(shape[i]);
        }
    }

    rotateRight() {
        let str = "";
        for (let row = 0; row < this.shape.length; row++) {
            for (let column = 0; column < this.shape.length; column++) {
                str += this.shape[this.size - column][row];
            }
            str += "\n"
        }
        return str;
    }

    rotateLeft() {
        let str = "";
        for (let row = 0; row < this.shape.length; row++) {
            for (let column = 0; column < this.shape.length; column++) {
                str += this.shape[column][this.size - row];
            }
            str += "\n"
        }
        return str;  
    }

    toString() {
        let str = "";
        for (let row = 0; row < this.shape.length; row++) {
            for (let column = 0; column < this.shape.length; column++) {
                str += this.shape[row][column];
            }
            str += "\n"
        }
        return str;
    }
}