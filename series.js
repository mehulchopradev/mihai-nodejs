/* exports.fiboSeries = function (n) {
    let result = '';
    let a = 0;
    let b = 1;
    result += a + '\t' + b + '\t';
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        result += c + '\t';

        a = b;
        b = c;
    }
    return result;
} */

function fiboSeries(n) {
    let result = '';
    let a = 0;
    let b = 1;
    result += a + '\t' + b + '\t';
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        result += c + '\t';

        a = b;
        b = c;
    }
    return result;
}

/* exports.evenSeries = function (n) {
    let result = '';
    for (let i = 0; i <=n; i = i + 2) {
        result += i + '\t';
    }
    return result;
} */
function evenSeries(n) {
    let result = '';
    for (let i = 0; i <=n; i = i + 2) {
        result += i + '\t';
    }
    return result;
}

module.exports = {
    fibo: fiboSeries,
    evenSeries,
};