const avarage = (a, b) => (a + b) / 2;

const square = (a) => a ** 2;

const cube = (a) => a ** 3;

const calculate = () => {
    const array = [];
    for (let i = 0; i <= 9; i++) {
        const x = avarage(square(i), cube(i));
        array.push(x);
    }
    return array;
};

module.exports = { avarage, square, cube, calculate };