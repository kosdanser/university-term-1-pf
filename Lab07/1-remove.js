function removeElement(array, item) {
    array.forEach((element, index) => {
        if (element === item) {
            array.splice(index, 1);
        }
    });
}

module.exports = { removeElement };
