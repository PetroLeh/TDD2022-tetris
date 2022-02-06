export class Board {
  width;
  height;
  center;
  board = [];
  falling;
  fallingAt;
  horizontalPosition;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.center = Math.floor(this.width / 2);
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
    this.horizontalPosition = this.center;
    this.drawFallingBlock();
  }

  drawFallingBlock() {
      if(this.hasFalling()) {
        let blockSize = this.sizeOf(this.falling);
        let halfOfBlock = Math.floor(blockSize / 2);
        for (let i = 0; i < blockSize; i++) {
            this.board[this.fallingAt + i][this.horizontalPosition - halfOfBlock + i] = this.falling.toString();
        }
        
      }    
  }

  sizeOf(block) {
      return block.toString().split("\n").length;
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
