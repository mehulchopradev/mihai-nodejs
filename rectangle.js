// area - scope - entire file - callable variable
// area - function object
/* function area(length, breadth) {
    var a = length * breadth;
    return a;
} */

// expression way of defining functions
const area = function (length, breadth) {
    return length * breadth;
};

var length = 4; // scope - entire file - non callable variable
var breadth = 2; // scope - entire file

var peri = perimeter(length, breadth);
var a = area(length, breadth);

console.log(peri);
console.log(a);

console.log(perimeter);
console.log(area);

// perimeter - scope - entire file - callable variable
// perimeter - function object
// loaded in the memory during the first pass even before the expressions evaluate (which happens in the second pass)
function perimeter(length, breadth) {
    // length, breadth : scope - perimeter (local variables)
    var p = 2 * (length + breadth); // scope - perimeter
    return p;
}

// console.log(length()); // length is not callable

/*
Scope of variables in javascript is either
1. Entire file
2. The function
*/