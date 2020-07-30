import React from "react";
import InputGeneric from '../input-generic/input-generic.component';
import { useForm } from "react-hook-form";


const AdoptionForm = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <InputGeneric
                    placeholder={'primer nombre'}
                    label={'Primer nombre'}
                    errors={errors}
                    refx={ register({ required: true })}
                    name={'firstName'}
                    >
                    {errors.firstName && "El primer nombre es requerido"}
                </InputGeneric>
                <InputGeneric
                    placeholder={'segundo nombre'}
                    label={'Segundo nombre'}
                    errors={errors}
                    refx={ register({ required: false })}
                    name={'secondName'}
                    >
                </InputGeneric>
                <InputGeneric
                    placeholder={'otros nombres'}
                    label={'Otros nombres'}
                    errors={errors}
                    refx={ register({ required: false })}
                    name={'othersName'}
                    >
                </InputGeneric>
                
            </div>        
            <div className="mb-4">
                <InputGeneric
                    placeholder={'primer apellido'}
                    label={'Primer apellido'}
                    errors={errors}
                    refx={ register({ required: true })}
                    name={'lastName'}
                    >
                    {errors.firstName && "El primer apellido es requerido"}
                </InputGeneric>
                <InputGeneric
                    placeholder={'segundo apellido'}
                    label={'Segundo apellido'}
                    errors={errors}
                    refx={ register({ required: false })}
                    name={'secondLastName'}
                    >
                </InputGeneric>
            </div>        
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Completar'/>
            </form>
        </div>
    );
};
export default AdoptionForm;