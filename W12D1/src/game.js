const Asteroid = require("./asteroid");

function Game() {
  this.dimX = window.innerWidth;
  this.dimY = window.innerHeight;
  this.numAstroids = 10;
  this.asteroids = [];
  this.addAsteroids();
};

Game.prototype.addAsteroids = function() {

  for (let i = 0; i < this.numAstroids; i += 1) {
    let junk = new Asteroid(this.randomPosition())
    this.asteroids.push(junk);
  }
}

Game.prototype.randomPosition = function() {
  const posX = (Math.random() * (this.dimX - 0) + 0);
  const posY = (Math.random() * (this.dimY - 0) + 0);
  return {pos: [posX, posY]};
}

Game.prototype.draw = function(ctx) {
  this.dimX = window.innerWidth;
  this.dimY = window.innerHeight;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // debugger
  this.asteroids.forEach(asteroid => {
    asteroid.draw(ctx);
  });
}

// Game.prototype.moveObjects = function() {
//   this.asteroidsPos.forEach(pos => {
//     let pos = { pos: pos };
//     let asteroid = new Asteroid(pos);
//     asteroid.move(ctx);
//   });
// }


module.exports = Game;


// let dx = (Math.random() * 2) - 1;
// let dy = (Math.random() * 2) - 1;