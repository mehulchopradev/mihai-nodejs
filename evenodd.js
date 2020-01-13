const n = 11;
// not able to re assign n at a later point in the program
// scope of const is same as let. Which is either the entire file or the block scope
// Preference
// 1. const, 2. let 3. var

/* if (n % 2) {
    var msg = 'Odd' // scope - entire file
} else {
    var msg = 'Even' // scope - entire file
}

console.log(msg); */

// es6
let msg; // scope of msg becomes the entire file. But if created in a block, the scope would be the block
if (n % 2) {
    msg = 'Odd';
} else {
    msg = 'even';
}

console.log(msg);

// n = n + 6; // this will not be allowed