import r, { Fragment } from 'react';
import Builder from '../../';
import { createFetchVariables, createFetchChildren } from '../fetch';
import loadComponent from './loadComponent';
import OPTIONS from '../../config';

export default function createComponent(name, props, data, items) {
    if (name.substr(0, 1) === name.substr(0, 1).toUpperCase()) {
        let propClass = [];
        if (!props.hasOwnProperty("className"))
            propClass.push(name)
        else
            propClass.push(props["className"],name)
        props = { ...props, className: propClass.join(" ") }
        name = 'div'
        //React Component name must be PascalCase
    }
    let Spefic = r.createElement(
        name,
        { ...props }
    );
    if (!Spefic || !Spefic.type)
        return { error: true, detail: { name, message: OPTIONS.errorMessages.notCreated } }
    let chr = [], loadingChild = loadComponent(data?.fetch?.component).result;
    if (typeof data?.fetch?.each !== "undefined") {
        chr = data?.fetch?.each.split(">");
        chr = chr.reduce((p, c, i) => [chr[(chr.length - 1) - i].trim(), [...p]], []);
    }
    return (
        <>
            <Spefic.type {...Spefic.props}>
                {data?.text}
                <>
                    {typeof data?.fetch !== "undefined" && items.length > 0 &&
                        items.map((k, m) => {
                            return (
                                <Fragment key={m}>
                                    {loadingChild ? <loadingChild.default item={k}></loadingChild.default>
                                        : createFetchChildren(chr, createFetchVariables(k, data.fetch.text),m)}
                                </Fragment>
                            )
                        }
                        )
                    }
                </>
                <Builder data={data}></Builder>
            </Spefic.type >
        </>
    )
}




