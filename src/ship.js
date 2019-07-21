const Util = require('./util');
const MovingObject = require('./moving_object');

function Ship(options) {
  options.vel = [0,0];
  options.radius = Ship.RADIUS;
  options.color = Ship.COLOR;

  MovingObject.call(this, options);
}

Ship.RADIUS = 20;
Ship.COLOR = 'rgb(22.9%, 20.4%, 46.4%)';

Util.inherits(Ship, MovingObject);

module.exports = Ship;