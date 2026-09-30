function methods(obj) {
    let result = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            result.push([key, obj[key].length]);
        }
        else continue;
    }
    return result;
}

module.exports = { methods };