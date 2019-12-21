// @flow
import {MovingObject} from './moving_object';
import Asteroid from './asteroid';
import Game from './game';
import GameView from './game_view';
import Ship from './ship';

console.log("Index file loading properly");
document.addEventListener('DOMContentLoaded', () => {
  let canvas: any = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  let gameView = new GameView(ctx);
  gameView.start();
  return Promise.resolve("Dummy response to keep console quiet");
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;