const before = [
    {
        key: "name", value: "jared"
    },
    {
        key: "age", value: "old",
    },
    {
        key: "food", value: "bacon"
    },
    {
        key: "food", value: "pizza"
    },
    {
        key: "food", value: "cubby's"
    },
    {
        key: "food", value: "wings"
    },
    {
        key: "food", value: "shakes"
    }
];
console.log("BEFORE");console.log(before);console.log();
var after = before;

/*START EDITS*/
var condenseToObject = function (accumulator, arrayElement) {
    var key = arrayElement.key;
    var value = arrayElement.value;
    if (accumulator[key]){
        accumulator[key] = [].concat(accumulator[key],value);
    } else {
        accumulator[key] = value;
    }
    return accumulator;
};
after.splice(2, 0, {key: "kids", value: "gazillions"});
after = after.reduce(condenseToObject, {});
/* END  EDITS*/

const goal = {
    age: "old",
    kids: "gazillions",
    name: "jared",
    food: [
        "bacon",
        "pizza",
        "cubby's",
        "wings",
        "shakes"
    ]
}
console.log("AFTER");console.log(after);console.log();
console.log("GOAL");console.log(goal);console.log();
if (after == goal){console.log("Success!");} else {console.log("Try Again")}