const Asteroid = require('./asteroids');

DEFAULTS = {
  DIM_X: 600,
  DIM_Y: 800,
  NUM_ASTEROIDS: 20
}

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    let ast = new Asteroid({pos: this.randomPosition()});
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

module.exports = Game;