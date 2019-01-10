function* generator () {
    console.log(1);
    yield 'yield 1';
    console.log(2);
    yield 'yield 2';
    console.log(2);
    return 'hello world';
}

var gen = generator();
gen.next();
gen.next();
gen.next();
console.log(gen.next().value);