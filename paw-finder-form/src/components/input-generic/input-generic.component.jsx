import React from "react";

const InputGeneric = (props) => {
    const {label,name,refx,placeholder} = props;
    return(
        <>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            {label}
        </label>
        <input 
        ref={refx}
        name={name} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" 
        type="text" placeholder={placeholder}/>
        <p className="text-red-500 text-xs italic">{props.children}</p>
        </>
    );
}

export default InputGeneric;