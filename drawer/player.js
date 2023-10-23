import { Game } from "./game";

export class Player {
  constructor(game = new Game(), width, height) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;

    // to remember last pressed move. (used to block continuous movement).
    this.moved = [];
    // to control movement while animating previous move
    this.allowMove = true;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  moveY(multiplier = 1) {
    this.y += multiplier * this.height;

    if (this.y < 0) this.y = 0;
    else if (this.y > this.game.height - this.height)
      this.y = this.game.height - this.height;
  }
  moveX(multiplier = 1) {
    this.x += multiplier * this.width;

    if (this.x < 0) this.x = 0;
    else if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
  }
  moveUp() {
    this.moveY(-1);
    this.moved.push("up");
  }
  moveDown() {
    this.moveY(1);
    this.moved.push("down");
  }
  moveLeft() {
    this.moveX(-1);
    this.moved.push("left");
  }
  moveRight() {
    this.moveX(1);
    this.moved.push("right");
  }

  update(movement = []) {
    if (!this.allowMove) return;
    this.moved = this.moved.filter((prevMove) => movement.includes(prevMove));

    movement.forEach((move) => {
      if (move === "up" && !this.moved.includes("up")) {
        this.moveUp();
      } else if (move === "down" && !this.moved.includes("down")) {
        this.moveDown();
      } else if (move === "left" && !this.moved.includes("left")) {
        this.moveLeft();
      } else if (move === "right" && !this.moved.includes("right")) {
        this.moveRight();
      }
    });
  }

  draw() {
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
