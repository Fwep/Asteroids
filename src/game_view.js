// @flow strict
import Ship from "./ship";
import Game from "./game";

export default class GameView {
  game: Game;
  ctx: any;
  lastTime: number = 0;

  constructor(ctx: any) {
    this.game = new Game();
    this.ctx = ctx;
    this.lastTime;
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this))
  }

  bindKeyHandlers(): void {
    // keymaster exposes a global method, key(key, callback) that triggers the callback when the key is pressed
    let { ship } = this.game;
    key("w", () => {
      ship.power([0, -1]);
    });
    key("a", () => {
      ship.power([-1, 0]);
    });
    key("s", () => {
      ship.power([0, 1]);
    });
    key("d", () => {
      ship.power([1, 0]);
    });
    key("space", () => {
      ship.fireBullet();
      return false;
    });
  }

  start(): void {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }
}