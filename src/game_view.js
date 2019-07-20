function GameView(ctx) {
  this.game = new Game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  window.setInterval(() => {
    this.game.moveObjects(ctx);
    this.game.draw(this.ctx);
  }, 20);
}

module.exports = GameView;