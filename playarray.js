const pointers = [5, 6, 6, 7, 10, 2, 3, 1, 10, 9];

// higher order function
function filter(elements, fn) { // fn - lower order function
    const results = [];
    for(let element of elements) {
        if(fn(element)) {
            results.push(element);
        }
    }

    return results;
}

// get a new array that has all the odd elements from the pointers array (filtering)
/* const odds = [];
for(let pointer of pointers) {
    if (pointer % 2) {
        odds.push(pointer);
    }
} */

/* function oddsFn(ele) {
    return ele % 2;
}
const odds = filter(pointers, oddsFn); */

const odds = pointers.filter(function(ele) {
    return ele % 2;
});
console.log('**********Odds*************');
console.log(odds);

// get a new array that has all the even elements greater than 5 from pointers array (filtering)
/* const evens = [];
for(let pointer of pointers) {
    if (!(pointer % 2) && pointer > 5) {
        evens.push(pointer);
    }
} */


/* const evens = filter(pointers, function(ele) {
    return !(ele % 2) && (ele > 5);
}); */
const evens = pointers.filter(function (ele) {
    return !(ele % 2) && (ele > 5);
});
console.log('**********evens*************');
console.log(evens);

// get a new array of elements deducted by 1 from the pointer array (mapping)
const deductedMarks = pointers.map(function (ele) {
    return ele - 1;
});
console.log('******** deducted marks ************');
console.log(deductedMarks);