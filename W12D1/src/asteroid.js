const utils = require('./utils.js');
const MovingObject = require('./moving_object');

function Asteroid(options) {

  options.vel = utils.randomVec(5);
  options.color = "#FFFFFF";
  options.radius = 30;

  MovingObject.call(this, options) //  super(options),  this = new MovingObject(options);
}
utils.inherits(MovingObject, Asteroid); // Asteroid < MovingObject

// let a = new Asteroid({ pos: [12, 24] ..})


// a = { { pos: [12, 24] 
//         vel: util.randomVec(5);}

//     }

// Asteroid {
//   MovingObject{
//     
//       // this.options = options;
//       let self = this

//       const { pos, vel, radius, color } = options;
//       //  const pos = options.pos;

//       this.pos = pos; //@pos = pos
//       this.vel = vel; //@vel = vel
//       this.radius = radius; //@radius = radius
//       this.color = color; //@color = color 
//     
//   }
// }

module.exports = Asteroid