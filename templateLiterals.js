function winning (param) {
    console.log(param)

}

// Binary Number
let taco = 0b11101;

winning (`template literal ${taco}`); // template literal 29
winning `template literal ${taco} and burro`; // [ 'template literal ', ' and burro' ]