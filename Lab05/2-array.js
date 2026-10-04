function array() {
    const arr = [];
    const get = (index) => arr[index];
    get.push = (value) => arr.push(value);
    get.pop = () => arr.pop();
    return get;
}
