import OPTIONS from "../../config";
export default function createFetchVariables(k, text, c = 0) {
    const regex = new RegExp(`\\${OPTIONS.variableTargetPrefix}\\w*`, "g");
    let $text = text;
    let m;

    while ((m = regex.exec($text)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match) => {
            if (typeof k === "object" && k.hasOwnProperty(match.slice(2, match.length)))
                $text = $text.replace(match, k[match.slice(2, match.length)]);
            if (typeof k === "string" && match === "$_i")
                $text = $text.replace(match,c);
        });
    }
    return $text;
}