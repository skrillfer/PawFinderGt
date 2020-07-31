import React from "react";

import InputGeneric from '../input-generic/input-generic.component';
import { useForm } from "react-hook-form";
const AdopterDetails = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'primer nombre'}
                            label={'Primer nombre'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'firstName'}
                            >
                            {errors.firstName && "El primer nombre es requerido"}
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}      
                            placeholder={'primer apellido'}
                            label={'Primer apellido'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'lastName'}
                            >
                            {errors.firstName && "El primer apellido es requerido"}
                        </InputGeneric>
                        
                    </div>        
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'segundo nombre'}
                            label={'Segundo nombre'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'secondName'}
                            >
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'segundo apellido'}
                            label={'Segundo apellido'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'secondLastName'}
                            >
                        </InputGeneric>
                    </div>
                </div>
                <br/>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'ocupacion'}
                            label={'Ocupacion'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'occupation'}
                            >
                            {errors.firstName && "El primer nombre es requerido"}
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'dpi'}
                            label={'DPI'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'dpi'}
                            >
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'xxxxx-xxxx'}
                            label={'Telefono'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'telephone'}
                            >
                        </InputGeneric>
                        
                    </div>
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'correo electronico'}
                            label={'Email'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'email'}
                            >
                            {errors.firstName && "El email es requerido"}
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'30 calle ... Guatemala'}
                            label={'Direccion donde vivira el gato'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'address'}
                            >
                        </InputGeneric>
                        
                    </div>
                </div>
        </form>
    );
};
export default  AdopterDetails;
