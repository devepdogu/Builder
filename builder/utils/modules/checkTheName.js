
export default function checkTheName(name) {
    const OPTIONS = require("../../config");
    var firstLetter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~123456789]/;
    var allLetter = /[`!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;

    if (name === "" || name.length === 0) {
        return { error: true, msg: OPTIONS.errorMessages.nameErrors.isEmpty };
    }
    else if (/\s/g.test(name)) {
        return { error: true, msg: OPTIONS.errorMessages.nameErrors.isSpace };
    }
    else if (name.length > 50) {
        return { error: true, msg: OPTIONS.errorMessages.nameErrors.isMaxLength };
    }
    else if (firstLetter.test(name.substr(0, 1))) {
        return { error: true, msg: OPTIONS.errorMessages.nameErrors.isFirstLetter };
    }
    else if (allLetter.test(name))
        return { error: true, msg: OPTIONS.errorMessages.nameErrors.isContainLetters };

    return { error: false };
}


