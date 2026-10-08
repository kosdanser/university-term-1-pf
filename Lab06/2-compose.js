function compose (...fns) {
    if (!fns.every(x => typeof x === 'function')) {
        throw new Error('All arguments must be functions');
    }

    const errorHandlers = [];

    const f = (x) => {
        if (fns.length === 0) {
            return x;
        }

        try {
            return fns.reduceRight((x, fn) => fn(x), x);
        } catch (error) {
            for (const handler of errorHandlers) {
                handler(error);
            }
            return undefined;
        }
    }

    f.on = function(event, handler) {
        if (event === 'error') {
            errorHandlers.push(handler);
        }
    }

    return f;
}
