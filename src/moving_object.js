const Util = require('./util');

function MovingObject(settings) {
  this.pos = settings.pos;
  this.vel = settings.vel;
  this.radius = settings.radius;
  this.color = settings.color;
  this.game = settings.game;
}

MovingObject.prototype.collideWith = function(otherObject) {}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  let [x, y] = [this.pos[0], this.pos[1]];
  ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
}  

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let sumRadii = otherObject.radius + this.radius;
  return Util.distance(this.pos, otherObject.pos) < sumRadii;
}

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.move = function() {
  let [posX, posY] = [this.pos[0], this.pos[1]];
  let [velX, velY] = [this.vel[0], this.vel[1]];
  let newPos =  [posX + velX, posY + velY];

  if (this.game.isOutOfBounds(newPos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(newPos);
      return;
    } else {
      this.game.remove(this);
      return;
    }
  } else {
    this.pos = newPos;
  }
}  

module.exports = MovingObject;