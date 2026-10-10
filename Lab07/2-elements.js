const removeElement = require('./1-remove.js').removeElement;

function removeElements(array, ...items) {
    items.forEach(item => removeElement(array, item));
}

module.exports = { removeElements };
