// @flow
import Util from './util';
import typeof Game from './game';

export type Options = {
  color: string,
  game: Game,
  isWrappable: boolean,
  radius: number,
  pos: [number, number],
  vel: [number, number],
}

export class MovingObject {
  color: string;
  game: Game;
  isWrappable: boolean;
  radius: number;
  pos: [number, number];
  vel: [number, number];

  constructor(options: Options) {
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = options.isWrappable;
    this.pos = options.pos;
    this.radius = options.radius;
    this.vel = options.vel;
  }

  collideWith(otherObject: MovingObject) {}

  draw(ctx: any): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    let [x, y]: [number, number] = [this.pos[0], this.pos[1]];
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  isCollidedWith(otherObject: MovingObject): boolean {
    let sumRadii = otherObject.radius + this.radius;
    return Util.distance(this.pos, otherObject.pos) < sumRadii;
  }

  move(timeDelta: number = 1): void {
    let [posX, posY]: [number, number] = [this.pos[0], this.pos[1]];
    let [velX, velY]: [number, number] = [this.vel[0], this.vel[1]];
    let newPos = [posX + (velX*timeDelta/20), posY + (velY*timeDelta/20)];
    
    if (this.game.isOutOfBounds(newPos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(newPos);
        return;
      } else {
        this.game.remove(this);
        return;
      }
    } else {
      this.pos = newPos;
    }
  }
}

