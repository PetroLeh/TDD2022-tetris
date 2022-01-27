export class Board {
  width;
  height;
  board = [];
  falling;
  fallingAt;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    for (let i = 0; i < height; i++) {
        this.board[i] = [];
        for (let j = 0; j < width; j++) {
            this.board[i][j] = ".";
        }
    }
    this.falling = null;
  }

  hasFalling() {
    return this.falling != null;
  }

  drop(block) {
    if (this.falling != null) {
      throw 'already falling';
    }
    this.falling = block.toString();
    this.fallingAt = 0;
    this.board[0][1] = block.toString();
  }

  tick() {
    if (this.fallingAt == 2) {
        this.falling = null;
        return;
    }
    this.fallingAt++;
    if (this.board[this.fallingAt][1] != ".") {
        this.falling = null;
        return;
    }
    this.board[this.fallingAt][1] = this.falling.toString();
    this.board[this.fallingAt - 1][1] = ".";

  }

  toString() {
    let board = "";
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                board += this.board[i][j];
            }
            board += "\n";
        }
    return board;
  }
}
