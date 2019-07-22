const Asteroid = require('./asteroid');
const Ship = require('./ship');
const Bullet = require('./bullet');

DEFAULTS = {
  DIM_X: 800,
  DIM_Y: 600,
  NUM_ASTEROIDS: 15
}

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.bullets = [];

  this.ship = new Ship({pos: this.randomPosition(), game: this});
}

Game.prototype.add = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  } else if (obj instanceof Bullet) {
    this.bullets.push(obj);
  }
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    let ast = new Asteroid({pos: this.randomPosition(), game: this});
    this.add(ast);
  }
}

Game.prototype.allObjects = function() {
  let allObjects = [].concat(this.asteroids, this.ship, this.bullets);
  return allObjects;
}

Game.prototype.checkCollisions = function() {
  let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = i + 1; j < allObjects.length; j++) {
      if (allObjects[i].isCollidedWith(allObjects[j])) {
        allObjects[i].collideWith(allObjects[j]);
      }
    }
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  const img = document.getElementById('source');
  ctx.drawImage(img, 0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  this.allObjects().forEach(obj => obj.draw(ctx));
}

Game.prototype.isOutOfBounds = function(pos) {
  return ((pos[0] > DEFAULTS.DIM_X) || (pos[1] > DEFAULTS.DIM_Y));
}

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(obj => obj.move());
}

Game.prototype.randomPosition = function() {
  let randX = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_X));
  let randY = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_Y));
  return [randX, randY];
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

Game.prototype.remove = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(obj), 1);
  } else if (obj instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(obj), 1);
  }
}

Game.prototype.step = function(ctx) {
  this.moveObjects(ctx);
  this.checkCollisions();
}


module.exports = Game;