const Asteroid = require('./asteroids');

DEFAULTS = {
  DIM_X: 800,
  DIM_Y: 600,
  NUM_ASTEROIDS: 20
}

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    let ast = new Asteroid({pos: this.randomPosition(), game: this});
    this.asteroids.push(ast);
  }
}

Game.prototype.randomPosition = function() {
  let randX = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_X));
  let randY = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_Y));
  return [randX, randY];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  this.asteroids.forEach(ast => ast.draw(ctx));
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(ast => ast.move());
}

Game.prototype.wrap = function(pos) {
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

module.exports = Game;