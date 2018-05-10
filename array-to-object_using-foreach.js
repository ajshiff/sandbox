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
    }]
console.log("BEFORE");console.log(before);console.log();

/*START EDITS*/
function sendElementsToObject(array){
    var object = {};
    array.forEach(element => {
        var key = element.key;
        var value = element.value
        object[key] = value;
    });
    return object;}
before.pop();
const after = sendElementsToObject(before);
/*END EDITS*/

var goal = {
    year: "2016",
    make: "Porsche",
    model: "911 R",
    color: "white"}
/*Logs*/
console.log("AFTER");console.log(after);console.log();
console.log("GOAL");console.log(goal);console.log();