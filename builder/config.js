const OPTIONS = {
    variableTargetPrefix: "$_",
    searchExistFolder: "layouts",
    errorMessages: {
        undefinedName: "Component name must not empty",
        invalidName: "Component name invalid",
        fetchHandle: "Fetching Url Not Found",
        unknownError: "Unknown Error",
        notCreated: "Component not created",
        nameErrors: {
            isEmpty: "Component name must not be empty",
            isSpace: "Component name must not contain space char",
            isMaxLength: "Component name must be max 50 length",
            isFirstLetter: "Component first letter must not be special chars",
            isContainLetters: "Component name must not contain special chars"
        }
    }
}


module.exports = OPTIONS