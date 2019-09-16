console.log("webpack is working");

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid');
const Game = require('./game.js');
const GameView = require('./game_view');

window.MovingObject = MovingObject;


document.addEventListener("DOMContentLoaded", function() {
  
  const canvasEl = document.getElementById('game-canvas');
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  const ctx = canvasEl.getContext("2d");

   const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 30,
    color: "#00FF00"
  });

  mo.draw(ctx);

  const asteroid = new Asteroid ({pos: [100, 100]});

  asteroid.draw(ctx);


  const game1= new Game();
  // newGame.draw(ctx); 

  const newGame = new GameView(game1, ctx);
  newGame.start();

});
