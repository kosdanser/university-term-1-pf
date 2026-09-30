const obj = { n: 5 };
console.dir(obj);

function inc(num)
{
    return num.n++;
}

inc(obj);
console.dir(obj);