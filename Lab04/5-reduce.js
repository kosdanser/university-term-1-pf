function sumReduce(...args) {
    return args.reduce((sum, number) => sum + number, 0);
}

module.exports = { sumReduce };