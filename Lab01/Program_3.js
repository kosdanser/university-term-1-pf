const values = [
    10,
    'hello',
    true,
    3.14,
    false,
    'JavaScript',
    -20,
    true
];

const counts = {};

for (const value of values) {
    const type = typeof value;
    
    if (counts[type] === undefined) {
        counts[type] = 0;
    }
    
    counts[type]++;
}

console.log(counts);