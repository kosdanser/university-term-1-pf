function ages(people) {
    const result = {};

    for (const name in people) {
        result[name] = people[name].died - people[name].born;
    }
    
    return result;
}

module.exports = { ages };