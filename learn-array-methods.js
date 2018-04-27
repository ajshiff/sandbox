//comment
//var pointValue = [5, 5, 5, 10, 3, 3, 3, 3, 3];
var array1 = ['a','b','c'];
var array2 = ['d','e','f'];
var array3 = array1.concat(array2);
var array4 = [2,2,4,2,2];
console.log(array1.concat(array2));
console.log(array1);
console.log(array2);
console.log(array3);
array3.forEach(function(element, index){console.log(element + index)});
//console.log(array3.includes('a'[0]));
var element = 2;
console.log(array4.every(function(element){return element===2;}));