const Game = require('./game')


function GameView(Game, ctx) {
  this.game = Game;
  this.ctx = ctx;
}

GameView.prototype.start = function(){
  setInterval(()=>{
  // this.game.moveObjects();
  this.game.draw(this.ctx);
  }, 20);
}

module.exports = GameView;