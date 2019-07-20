function MovingObject(settings) {
  this.pos = settings.pos;
  this.vel = settings.vel;
  this.radius = settings.radius;
  this.color = settings.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  let [x, y] = [this.pos[0], this.pos[1]];
  ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
}

MovingObject.prototype.move = function() {
  let [posX, posY] = [this.pos[0], this.pos[1]];
  let [velX, velY] = [this.vel[0], this.vel[1]];
  let newPos =  [posX + velX, posY + velY];
  this.pos = newPos;
}

module.exports = MovingObject;