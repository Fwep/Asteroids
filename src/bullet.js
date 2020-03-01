// @flow strict
import {type Options} from './moving_object'
import {MovingObject} from './moving_object';
import Util from './util';
import Asteroid from './asteroid'

class Bullet extends MovingObject {
  static COLOR: string;
  static RADIUS: number;
  static SPEED: number;
  static isWrappable: false;

  constructor(options: Options) {
    options.color = Bullet.COLOR;
    options.radius = Bullet.RADIUS;
    options.vel = Util.scale(Util.direction(options.vel), 10);
    options.isWrappable = Bullet.isWrappable;

    super(options);
  }
}

Bullet.COLOR = "yellow";
Bullet.RADIUS = 10;
Bullet.SPEED = 10;
Bullet.isWrappable = false;


// Commenting this back in causes righthand since of instanceof is not callable bug
// Bullet.prototype.collideWith = function(obj) {
//   if (obj instanceof Asteroid) {
//     this.game.remove(obj);
//   } else {
//     return;
//   }
// }

export default Bullet;