import React from "react";

const InputGeneric = (props) => {
    const {label,name,refx,placeholder,inputClass, labelClass} = props;
    return(
        <>
        <label className={labelClass} style={{display:'inline-block'}} htmlFor="username">
            {label}
        </label>
        <div className="w-full flex-1 mx-2 svelte-1l8159u">
            <div className="bg-white my-2 p-1 flex border border-gray-400 rounded svelte-1l8159u">
                <input 
            ref={refx}
            name={name} 
            className={inputClass}
            id="username" 
            type="text" placeholder={placeholder}/>
            
            </div>
        </div>
        
        
        <p className="text-red-500 text-xs italic">{props.children}</p>
        </>
    );
}

export default InputGeneric;