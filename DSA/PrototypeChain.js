function Leopard() {
  this.species = "leopard";
}

Leopard.prototype.hiss = function () {
  console.log("Leopard");
};

const leopard = new Leopard();

function Lynx() {
  this.species = "lynx";
}

Lynx.prototype = Object.create(leopard);

Lynx.prototype.purr = function () {
  console.log("Lynx");
};

const lynx = new Lynx();

function Cat() {
  this.species = "cat";
}

Cat.prototype = Object.create(lynx);

Cat.prototype.meow = function () {
  console.log("Cat");
};

const cat = new Cat();

cat.meow();
cat.purr();
cat.hiss();
