const n = 8;

// const series = require('./series'); // imported the module in variable series
const { fibo, evenSeries } = require('./series');

// 1. Fibonacci series - 0 1 1 2 3 5 8 13
// 2. Even series - 0 2 4 6 8

// console.log(series.fiboSeries(n));
// console.log(series.evenSeries(n));

console.log(fibo(n));
console.log(evenSeries(n));