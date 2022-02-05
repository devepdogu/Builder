import OPTIONS from "../../config";

export default function loadComponent(name) {
    try {
        const Component = require(`./../../${OPTIONS.searchExistFolder}/${name}.js`);
        if (typeof Component.default === "undefined")
            return { result: false }
        return { result: Component }
    }
    catch (e) {
        if (e.code !== "MODULE_NOT_FOUND")
            return {
                result: false, msg: {
                    name: OPTIONS.errorMessages.unknownError, message: `${e}`
                }
            };
        return { result: false };

    }

}