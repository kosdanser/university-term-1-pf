function rangeOdd(begin, end) {
    if (end - begin < 0) return [];
    const array = [];
    for (let n = begin; n <= end; n++) {
        if (n % 2 !== 0) {
            array.push(n);
        }
    }
    return array;
}

module.exports = { rangeOdd };