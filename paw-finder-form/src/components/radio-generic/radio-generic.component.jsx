import React from 'react';
const RadioButtonGeneric = (props) => {
    const {label,values,name,refx}  = props;
    return (
        <div class="mt-4">
            <span class="text-gray-700">{label}</span>
            <div class="mt-2">
                {
                    values.map(element => 
                        <label className="inline-flex items-center ml-2">
                            <input type="radio" className="form-radio" name={name} value={element.value}/>
                            <span className="ml-1">{element.label}</span>
                        </label>
                        
                    )
                }
            </div>
            <p className="text-red-500 text-xs italic">{props.children}</p>
        </div>
    );
}
export default RadioButtonGeneric;