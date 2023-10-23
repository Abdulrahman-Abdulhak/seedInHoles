import { Keys } from "../controllers/keys";
import { Player } from "./player";

export class Game {
  constructor(context = new CanvasRenderingContext2D(), width, height) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.keys = new Keys();
    this.player = new Player(this, 100, 100);
  }

  updateContext(context = new CanvasRenderingContext2D()) {
    this.context = context;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  update() {
    this.player.update(this.keys.movement);
  }

  draw() {
    this.player.draw();
  }
}
