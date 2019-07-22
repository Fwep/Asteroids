const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');
const Ship = require('./ship');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  window.ctx = ctx;
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;