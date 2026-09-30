function fn() {
    const obj1 = {name: "Danylo"};
    let obj2 = {name: "Danylo"};

    obj1.name = "Epstein";
    obj2.name = "Epstein";

    obj2 = {name: "Danylo Epstein"};
}

module.exports = { fn };