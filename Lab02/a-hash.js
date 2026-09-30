const phoneBook = {
    John: "+380990860205",
    Danylo: "+380990549076"
}

function findPhoneByName(name) {
    return phoneBook[name] || null;
}

module.exports = { phoneBook, findPhoneByName };