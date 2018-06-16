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
var after;
/*START EDITS*/
var condenseToObject = function (accumulator, arrayElement) {
    var key = arrayElement.key;
    var value = arrayElement.value;
    accumulator[key] = value;
    return accumulator;
}
after = before.filter(element => !(element.key === "msrp"));
after = after.reduce(condenseToObject, {});
//after = before.reduce(condenseToObject, {});
//delete after['msrp'];
/*END EDITS*/

var goal = {
    year: "2016",
    make: "Porsche",
    model: "911 R",
    color: "white"
}
console.log("AFTER");console.log(after);console.log();
console.log("GOAL");console.log(goal);console.log();