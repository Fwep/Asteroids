const MovingObject = require('./moving_object');
const Util = require('./util');

const DEFAULTS = {
  COLOR: 'rgb(46.4%, 36.1%, 20.4%)',
  RADIUS: 20
}

function Asteroid(options) {
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS; 
  options.vel = Util.randomVec(2);

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;