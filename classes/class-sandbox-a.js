class Animal {
    speak() {
        var self = this;
        return self;
    }
    static eat() {
        return this;
    }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak.bind(obj);
speak(); // undefined
console.log( speak() );

Animal.eat(); // class Animal
let eat = Animal.eat;
eat(); // undefined
console.log( eat() );