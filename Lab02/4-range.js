function range(begin, end)
{
    if (end - begin < 0) return [];
    const array = [];
    for (let n = begin; n <= end; n++){
        array.push(n);
    }
    return array;
}

a = range(15, 10);
console.log(a);
module.exports = { range };