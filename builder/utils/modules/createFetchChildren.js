import Parse from 'html-react-parser'
import r from 'react'
import createFetchVariables from './createFetchVariables';
export default function createFetchChildren(ch, text, i) {
    let c = ch[0];
    if (typeof c === "undefined")
        return null
    let rx = /(?<=\[).+?(?=\])/, props = {}, n = c.trim().slice(0, c.indexOf("[") < 0 ? c.length : c.indexOf("[")), p = rx.exec(c.trim());
    if (p !== null) {
        let cp = p[0].split(",");
        let pr = [];
        for (let cm of cp) {
            let ep = cm.split(":");
            if (ep[0] && ep[1]) {
                
                pr.push(`"${ep[0]}":"${createFetchVariables(ep[1], ep[1], i)}"`)
            }
        }
        let prs = JSON.parse(`{${pr.join(",")}}`);
        props = { ...props, ...prs }
    }
    let child = r.createElement(
        n,
        props
    );
    return (
        <child.type {...props}>
            {ch[1].length === 0 && text !== null && Parse(text)}
            {createFetchChildren(ch[1], ch[1].length !== 0 ? text : null)}
        </child.type>
    )

}

