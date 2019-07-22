const Util = require('./util');
const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');

function Bullet(options) {
  options.color = Bullet.COLOR;
  options.radius = Bullet.RADIUS;
  options.vel = Util.scale(Util.direction(options.vel), 10);

  MovingObject.call(this, options);
}

Bullet.COLOR = 'yellow';
Bullet.RADIUS = 10;
Bullet.SPEED = 10;

Util.inherits(Bullet, MovingObject);

// Commenting this back in causes righthand since of instanceof is not callable bug
// Bullet.prototype.collideWith = function(obj) {
//   if (obj instanceof Asteroid) {
//     this.game.remove(obj);
//   } else {
//     return;
//   }
// }

Bullet.prototype.isWrappable = false;

module.exports = Bullet;