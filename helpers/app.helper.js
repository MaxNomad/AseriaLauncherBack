exports.SrtToBool = (value, nullOnFailure = false) => {
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            value = true;
            break;
        case false:
        case 'false':
        case 0:
        case null:
        case "null":
        case '0':
        case 'off':
        case 'no':
            value = false;
            break;
        default:
            if (nullOnFailure) {
                value = null;
            } else {
                value = false;
            }
            break;
    }
    return value;
};
exports.isDate = (date) => {
    return (new Date(date) !== false) && !isNaN(new Date(date));
}