const before = [
    {
        key: "year", value: "2016" //0
    },
    {
        key: "make", value: "Porsche" //1
    },
    {
        key: "model", value: "911 R", //2
    },
    {
        key: "color", value: "white", //3
    },
    {
        key: "msrp", value: "$184,900" //4
    }
]
console.log("BEFORE");console.log(before);console.log();

/*START EDITS*/
var middle = before;

var condenseObjects = function (arrayElement) {
    var key = arrayElement.key;
    var value = arrayElement.value;
    var object = {};
    object[key] = value;
    return object;
}

var toNoMoreArray = function(acc, cur) {
    acc += cur;
    return acc;
};

middle.pop(); //Confident.
middle = middle.map(condenseObjects);
console.log("MIDDLE");console.log(middle);console.log();
middle = middle.reduce(toNoMoreArray);

/*END EDITS*/

const after = middle;
console.log("AFTER");console.log(after);console.log();

var goal = {
    year: "2016",
    make: "Porsche",
    model: "911 R",
    color: "white"
}

console.log("GOAL");console.log(goal);console.log();