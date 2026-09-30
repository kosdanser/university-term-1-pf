const phoneBook = [
    {name: "John", phone: "+380990860205"},
    {name: "Danylo", phone: "+380990549076"}
];

function findPhoneByName(name) {
    for (const User of phoneBook) {
        if (User.name === name) {
            return User.phone;
        }
    }
    return null;
}

module.exports = { phoneBook, findPhoneByName };