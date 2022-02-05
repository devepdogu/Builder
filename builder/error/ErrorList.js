import React from 'react';
import Error from './Error';



export default function ErrorList({ errors }) {
    const [activeError, setActiveError] = React.useState(0);
    const item = errors.length > 0 ? errors[activeError] : null;
    return (

        item !== null && (
            <Error
                message={item?.messageError}
                key={activeError}
                setActiveError={setActiveError}
                activeError={activeError} activeErrorCount={errors.length}>
                <span >{item.message}</span> {item?.name && <b style={{ display: 'block' }}>{item.name}</b>}
            </Error>
        )


    )
};

