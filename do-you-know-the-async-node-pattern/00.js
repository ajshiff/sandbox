var http = require('http');

function getRecentNodeVersion(callback) {
    console.log(2);
    http.get('http://nodejs.org/dist/index.json', function (err, nodeVersions) {
        console.log(12);
        if (err) {
            callback(err);
            // if this returned a value where would it go?
            return;
        }
        //this is weird for a callback to return a value, just think about it
        var words = callback(null, nodeVersions[0].version);
        console.log(words);
        console.log(15);

        //where does this string go?
        return 'more words';
    });

    console.log(3);

    //it is weird for the "node-pattern of handling async problems" to return something (don't do this) 
    //but I want you to think about this to fully understand async flow of execution
    //and to understand the difference between an async function and a callback
    return 'return';
}

function addNumbers(a, b, callback) {
    console.log(5);
    var notANumber = callback(null, a + b);
    console.log(notANumber);
    console.log(7);
    //it is weird for the "node-pattern of handling async problems" to return something (don't do this) 
    //but I want you to think about this to fully understand async flow of execution
    //and to understand the difference between an async function and a callback
    return 500;
}


function start() {
    var text, number;

    console.log(1);
    text = getRecentNodeVersion(function (err, nodeVersion) {
        console.log(13);

        if (err) {
            console.log(err);
            // if this returned a value where would it go?
            return;
        }

        console.log('Current Node Version:', nodeVersion);
        console.log(14);

        //this return is also weird, just want you to think about it
        return 'this is weird';
    });

    var example = function (err, sum) {
        if (err) {
            console.log(err);
            //if this returned a value where would it go?
            return;
        }
        console.log(6);
        console.log(sum);
        //this return is also weird, just want you to think about it
        return 'not a number';
    };
    console.log(4);
    number = addNumbers(2, 3, example());
    /*above, example() will cause an error becasue when addNumbers() tries to use it,
    it will become the string that it returns, rather than a function like it's expecting,
    Because the code is written to treat it like a function, but in reality it is a string,
    which will cause an error.*/
    console.log(8);
    console.log(number);
    console.log(9);
    console.log(text);
    console.log(10);
}

console.log(0);
start();
console.log(11);