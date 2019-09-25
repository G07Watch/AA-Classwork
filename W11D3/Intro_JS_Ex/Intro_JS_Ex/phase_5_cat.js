function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

const garfield = new Cat("Garfield", "Bryan")
const orangeCat = new Cat("OrangeCat", "Jon")

garfield.cuteStatement();
orangeCat.cuteStatement();

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}!`);
}

garfield.cuteStatement();
orangeCat.cuteStatement();

Cat.prototype.meow = function () {
  console.log(`${this.name} says "meow"`);
}

garfield.meow();
orangeCat.meow();

garfield.meow = function() {
  console.log(`${this.name} says "..."`);
}

garfield.meow();
orangeCat.meow();