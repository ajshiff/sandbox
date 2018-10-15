function Animal() {}

Animal.prototype.speak = function () {
    var self = this;
    return self;
};

Animal.eat = function () {
    return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // global object
console.log( obj.speak() );

let eat = Animal.eat;
eat(); // global object
console.log( eat() );