function seq(...args) {
    const last = args[args.length - 1];

    if (typeof last === 'number') {
        const functions = args.slice(0, -1);

        if (!functions.every(x => typeof x === 'function')) {
            throw new Error('All arguments must be functions');
        }

        return functions.reduceRight((number, fn) => fn(number), last);
    }

    if (!args.every(x => typeof x === 'function')) {
        throw new Error('All arguments must be functions');
    }

    return function(...newArgs) {
        return seq(...args, ...newArgs);
    }
}
