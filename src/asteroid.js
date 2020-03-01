// @flow strict
import type {Options} from './moving_object';
import {MovingObject} from './moving_object';
import Game from './game';
import Util from './util';
import Ship from './ship';
import Bullet from './bullet';

const DEFAULTS = {
  COLOR: 'yellow',
  RADIUS: 20,
  SPEED: 1
}

export default class Asteroid<T: Options> extends MovingObject {
  constructor(options: T) {
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.isWrappable = true;

    super(options);
  }

  collideWith(otherObject: MovingObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Bullet) {
      this.game.remove(this);
    }
  }
}