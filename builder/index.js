import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { checkTheName, createComponent, loadComponent } from "./utils/load";
import ErrorList from './error/ErrorList';
import OPTIONS from "./config";

const errors = [];

const UseOrCreateComponents = (name, props, data, i) => {
    const [items, setItems] = useState(data?.data ?? []);

    function fetchData() {
        if (typeof data?.fetch?.url !== "undefined" && errors.length === 0)
            fetch(`${data.fetch.url}`).then((k) => k.json()).then(response => setItems(response)).catch((e) => console.error(`${OPTIONS.errorMessages.fetchHandle} \nUrl:>${data.fetch.url}`));
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);
    const result = checkTheName(typeof name !== "undefined" ? name : "Empty")
    if (typeof name === "undefined")
        errors.push({ name, message: OPTIONS.errorMessages.undefinedName });
    else
        if (!result.error) {
            const Component = loadComponent(name);
            if (typeof Component?.msg !== "undefined")
                errors.push(Component.msg);
            else
                if (Component.result) {
                    const Spefic = Component.result.default;
                    return (
                        <Spefic props={Spefic.props} data={data} key={i} items={items}>
                            {data?.text}
                            <Builder data={data}></Builder>
                        </Spefic>
                    )
                } else {
                    const createdComponent = createComponent(name, props, data, items);
                    if (createdComponent?.error)
                        errors.push(createdComponent.detail);
                    else
                        return (
                            <Fragment key={i}>
                                {createdComponent}
                            </Fragment>
                        );
                }
        } else
            errors.push({ name, message: OPTIONS.errorMessages.invalidName, messageError: result.msg });
}


const Builder = ({ data }) => {
    if (typeof data.components === "undefined" || data.components.length === 0 || data === null || data.components === null)
        return <Fragment ></Fragment>;
    const Response = data.components.map((e, i) => UseOrCreateComponents(e.componentName, e?.props ?? {}, e, i));
    if (errors.length > 0)
        return <ErrorList errors={errors} ></ErrorList>
    return (
        <Fragment>
            {Response}
        </Fragment>
    );
}
export default Builder