// @flow
import Util from './util';
import {type Options} from './moving_object';
import {MovingObject} from './moving_object';
import Bullet from './bullet';

export default class Ship<T: Options> extends MovingObject {
  static RADIUS: number;
  static COLOR: string;

  constructor(options: T) {
    options.vel = [0, 0];
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.isWrappable = true;

    super(options);
  }

  fireBullet() {
    let bullet = new Bullet({
      vel: this.vel.slice(),
      pos: this.pos,
      game: this.game
    });
    this.game.add(bullet);
  }

  power(impulse: [number, number]): void {
    let newVel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
    this.vel = newVel;  
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.RADIUS = 20;
Ship.COLOR = 'rgb(22.9%, 20.4%, 46.4%)';