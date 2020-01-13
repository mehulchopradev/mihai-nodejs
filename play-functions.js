// abc (entire file) -> function object
function abc() {
    // j (abc) -> 8
    const j = 8;
    const i = 30;

    // k (abc) -> 8
    const k = 40;

    // p (abc) -> 90
    let p = 90;

    // xyz (abc) -> function object
    // a function can be defined inside another funtion in javascript
    function xyz() {
        // k (xyz) -> 10
        const k = 10;
        console.log(k); // 10

        // inner function can access the enclosing function (scope) variables
        console.log(i); // 30

        p = p + 40;
        console.log(p); // 130
    }

    xyz();
    console.log(j); // 8
    console.log(k); // 40
    console.log(p); // 130
}

abc();
// xyz(); // will not work

function pqr(i) {
    // i (pqr)

    // j (pqr)
    const j = 10;

    function mno(k) {
        // closure
        // inner function accessing the enclosing function variable
        // a function has acccess to its lexical environment even after the outer function denoting the lexical env
        // has returned!!
        return i + j + k;
    }

    // a function can return another function
    return mno;
}

const h = pqr(90); // h -> mno
console.log(h(45));


function asd(fn) {
    const i = 6;
    return fn(i);
}

function jrt(j) {
    return j * 3;
}

// a function can be passed as a argument to another function
// callback functions
console.log(asd(jrt));