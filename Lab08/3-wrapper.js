function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            const typeName = types[i].name.toLowerCase();
            if (typeof args[i] !== typeName) {
                throw new TypeError(`Argument ${i + 1} must be of type ${typeName}`);
            }
        }

        const result = fn(...args);
        const returnTypeName = types[types.length - 1].name.toLowerCase();
        if (typeof result !== returnTypeName) {
            throw new TypeError(`Return value must be of type ${returnTypeName}`);
        }

        return result;
    }
}

module.exports = { contract };
