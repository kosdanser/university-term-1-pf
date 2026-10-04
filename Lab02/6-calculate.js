const average = (a, b) => (a + b) / 2;

const square = (a) => a ** 2;

const cube = (a) => a ** 3;

const calculate = () => {
    const array = [];
    for (let i = 0; i <= 9; i++) {
        const x = average(square(i), cube(i));
        array.push(x);
    }
    return array;
};

console.log(calculate());

module.exports = { average, square, cube, calculate };