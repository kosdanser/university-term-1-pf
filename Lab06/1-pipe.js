const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

function pipe(...fns) {
    if (!fns.every(x => typeof x === 'function')) {
        throw new Error('All arguments must be functions');
    }

    return (x) => fns.reduce((x, fn) => fn(x), x);
}

const f = pipe(inc, twice, cube);
const f2 = pipe(inc,inc);
console.log(f(5));
console.log(f2(7));
