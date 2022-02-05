export default function Container({ children, items }) {
    // catch items prop and use fetch data
    return (
        <div className="p-3">
            This page have a fetch data page here 
            <code className="d-block">layouts/container.js</code>
            <span className="d-block bg-primary p-2  text-white">Found {items.length} item</span>
            {/* children props must be if you have a components property*/}
            {children}
        </div>
    )
};
