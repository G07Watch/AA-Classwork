Function.prototype.inherits = function(Superclass){
    let Subclass = this;
    console.log(Subclass);
    function Surrogate(){}

    
    Surrogate.prototype = Superclass.prototype; // 
    Subclass.prototype = new Surrogate(); //  
    Subclass.prototype.constructor = Subclass

};

function MovingObject(name) { this.name = name;};

MovingObject.prototype.stop = function(){ console.log(this.name, 'has stopped');

};

MovingObject.prototype.moving = function(){ console.log(thi.name, 'is moving');

};

let mover = new MovingObject('mover');


function Ship() { }
Ship.inherits(MovingObject);

Ship.prototype.launch = function(){
}

Ship.prototype.blast = function(){

}

function Asteroid() { }
Asteroid.inherits(MovingObject);

Asteroid.prototype.shootingStar = function(){

}

Asteroid.prototype.comet = function(){

}

a23 = new Asteroid();
console.log(Asteroid.__proto__);
console.log(a23.__proto__);
