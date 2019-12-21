// @flow
import Asteroid from "./asteroid";
import {type Options} from './moving_object';
import {MovingObject} from "./moving_object";
import Ship from './ship';
import Bullet from "./bullet";

const DEFAULTS = {
  DIM_X: 800,
  DIM_Y: 600,
  NUM_ASTEROIDS: 15
};

export default class Game {
  asteroids: Array<?Asteroid>;
  bullets: Array<?Bullet>;
  isWrappable: false;
  ship: Ship<Options>;

  constructor() {
    this.asteroids = [];
    this.addAsteroids();
    this.bullets = [];

    this.ship = new Ship({ pos: this.randomPosition(), game: this });
  }

  add<T: MovingObject>(obj: T): void {
    if (obj instanceof Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Bullet) {
      this.bullets.push(obj);
    }
  }

  addAsteroids(): void {
    for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
      let ast = new Asteroid({ pos: this.randomPosition(), game: this });
      this.add(ast);
    }
  }

  allObjects(): Array<MovingObject> {
    let allObjects = [].concat(this.asteroids, this.ship, this.bullets);
    return allObjects;
  }

  checkCollisions(): void {
    let allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = i + 1; j < allObjects.length; j++) {
        if (allObjects[i].isCollidedWith(allObjects[j])) {
          allObjects[i].collideWith(allObjects[j]);
        }
      }
    }
  }

  draw(ctx): void {
    ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
    const img = document.getElementById("source");
    ctx.drawImage(img, 0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
    this.allObjects().forEach((obj) => obj.draw(ctx));
  }

  isOutOfBounds(pos: [number, number]): boolean {
    return pos[0] > DEFAULTS.DIM_X || pos[1] > DEFAULTS.DIM_Y;
  }

  moveObjects(delta): void {
    this.allObjects().forEach(obj => obj.move(delta));
  }

  randomPosition(): [number, number] {
    let randX = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_X));
    let randY = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_Y));
    return [randX, randY];
  }

  remove(obj): void {
    if (obj instanceof Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    } else if (obj instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    }
  }

  step(ctx) {
    this.moveObjects(ctx);
    this.checkCollisions();
  }

  wrap(pos: [number, number]): [number, number] {
    let newPos = [pos[0], pos[1]];
    if (pos[0] > DEFAULTS.DIM_X) {
      newPos[0] = newPos[0] % DEFAULTS.DIM_X;
    } else if (pos[0] < 0) {
      newPos[0] = newPos[0] + DEFAULTS.DIM_X;
    }

    if (pos[1] > DEFAULTS.DIM_Y) {
      newPos[1] = newPos[1] % DEFAULTS.DIM_Y;
    } else if (pos[1] < 0) {
      newPos[1] = newPos[1] + DEFAULTS.DIM_Y;
    }

    return newPos;
  }
}
