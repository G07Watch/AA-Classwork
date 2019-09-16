const Utils = {

    inherits: function (Parent, Child){
        const Surrogate = function (){};
        Surrogate.prototype = Parent.prototype;
        Child.prototype = new Surrogate();
        Child.prototype.constructor = Child;
    },

    randomVec: function(length) {
        const deg = 2 * Math.PI * Math.random();
        return Utils.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.

    scale: function (vec, m) {
    return [vec[0] * m, vec[1] * m];
    }
  
}

module.exports = Utils;