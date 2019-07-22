const Ship = require('./ship')

function GameView(ctx) {
  this.game = new Game;
  this.ctx = ctx;
}

GameView.prototype.bindKeyHandlers = function () {
  // keymaster exposes a global method, key(key, callback) that triggers the callback when the key is pressed
  let {ship} = this.game;
  key('w', () => {ship.power([0,-1])});
  key('a', () => {ship.power([-1,0])});
  key('s', () => {ship.power([0,1])});
  key('d', () => {ship.power([1,0])});
  key('space', () => {
    ship.fireBullet()
    return false;
  });
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  window.setInterval(() => {
    this.game.step(this.ctx);
    this.game.draw(this.ctx);
  }, 20);
}

module.exports = GameView;