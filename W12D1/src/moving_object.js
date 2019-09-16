const utils = require('./utils.js');

function MovingObject(options) {
  // this.options = options;

  const { pos, vel, radius, color } = options;
  //  const pos = options.pos;

  this.pos = pos; //@pos = pos
  this.vel = vel; //@vel = vel
  this.radius = radius; //@radius = radius
  this.color = color; //@color = color 

 
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}


module.exports = MovingObject;


