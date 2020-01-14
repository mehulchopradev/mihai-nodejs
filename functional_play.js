function incrBy(by) {
    return function (v) {
        return v + by;
    };
}

const incrBy2 = incrBy(2);
console.log(incrBy2(5));
console.log(incrBy2(10));

const incrBy5 = incrBy(5);
const i = 9;
console.log(incrBy5(i));
console.log(incrBy5(9));