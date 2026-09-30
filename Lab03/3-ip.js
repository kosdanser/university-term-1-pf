function IPToInt(ip = '127.0.0.1') {
    const numbers = ip.split('.').map(Number);
    return numbers.reduce((result, number) => result + (number << (8 * (3 - numbers.indexOf(number)))), 0);
}

module.exports = { IPToInt };