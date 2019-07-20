const MovingObject = require('./moving_object');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  window.ctx = ctx;
});

window.MovingObject = MovingObject;
