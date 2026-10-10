function store(value) {
    return function() {
        return value;
    };
}

module.exports = { store };