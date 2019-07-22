const Util = require('./util');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet');

function Ship(options) {
  options.vel = [0,0];
  options.radius = Ship.RADIUS;
  options.color = Ship.COLOR;

  MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.fireBullet = function() {
  let bullet = new Bullet({vel: this.vel.slice(), pos: this.pos, game: this.game});
  this.game.add(bullet);
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  let newVel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
  this.vel = newVel;  
}

Ship.RADIUS = 20;
Ship.COLOR = 'rgb(22.9%, 20.4%, 46.4%)';


module.exports = Ship;