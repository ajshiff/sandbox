const promiseQueueLimit = require('./promiseQueueLimit.js');

var ten = [0,1,2,3,4,5,6,7,8,9];

async function myAwesomeAsyncFunction (value) {
    return Promise.resolve(value)
        .then( (thing) => {console.log(thing); return thing;})
        .catch(console.error);
}

function callback (err, data) {
    console.log(data);
}

promiseQueueLimit(ten, myAwesomeAsyncFunction, 2, callback);