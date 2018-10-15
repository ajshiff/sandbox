const arr = [7,4,12,25,9];
// Closure Problem
for (var a = 0; a < arr.length; a++) {
    setTimeout(() => {
        console.log(`The index is: ${a}. The value is: ${arr[a]}`);
    }, 0);
}
// Closure Fix using setTimeout pass-in parameter
for (var b = 0; b < arr.length; b++) {
    setTimeout(console.log, 0, `The index is: ${b}. The value is: ${arr[b]}`);
}

// Closure Fix using let
for (let c = 0; c < arr.length; c++) {
    setTimeout(() => {
        console.log(`The index is: ${c}. The value is: ${arr[c]}`);
    }, 0);
} 

// Closure Fix using closures by generating a function with that variable instance and an IFFE
for (var d = 0; d < arr.length; d++) {
    setTimeout((function (x) {
        return function () {
            console.log(`The index is: ${x}. The value is: ${arr[x]}`);
        };
    })(d), 0);
}