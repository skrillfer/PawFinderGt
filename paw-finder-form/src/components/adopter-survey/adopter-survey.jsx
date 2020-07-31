import React from "react";
import InputGeneric from '../input-generic/input-generic.component';
import { useForm } from "react-hook-form";
const AdopterSurvey = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'si/no describa'}
                            label={'1. Ha tenido un gato antes?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'secondName'}
                            >
                        </InputGeneric>
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'si/no describa'}
                            label={'3. Toda su familia esta de acuerdo con adoptar un gato?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'secondName'}
                            >
                        </InputGeneric>
                        
                    </div>        
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}      
                            placeholder={''}
                            label={'2. Que lo motiva a adoptar un gato'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'lastName'}
                            >
                            {errors.firstName && "El primer apellido es requerido"}
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={'cuantos?'}
                            label={'4. Hay ninos en casa?'}
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
                            placeholder={''}
                            label={'5. Que pasaria si un gato aruna un nino?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'occupation'}
                            >
                            {errors.firstName && "El primer nombre es requerido"}
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'7. Que pasaria si el gato no se lleva bien con las mascotas?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'email'}
                            >
                            {errors.firstName && "El email es requerido"}
                        </InputGeneric>
                    </div>
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'6. Tiene otras mascotas?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'dpi'}
                            >
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'8. En caso de que una mujer resulte embarazada, Que hara con el gato?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'address'}
                            >
                        </InputGeneric>
                    </div>    
                </div>
                
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'9. Quien se hara reponsable del cuidado y mantenimiento del nuevo gato?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'occupation'}
                            >
                            {errors.firstName && "El primer nombre es requerido"}
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'11. Como planea mantener al gato seguro?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'email'}
                            >
                            {errors.firstName && "El email es requerido"}
                        </InputGeneric>
                    </div>
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'10. Tendra el gato acceso a salir a la calle o al techo?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'dpi'}
                            >
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'12. En donde dormira el gato?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'address'}
                            >
                        </InputGeneric>
                    </div>    
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'13. Con que frecuencia tendra contacto humano?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'occupation'}
                            >
                            {errors.firstName && "El primer nombre es requerido"}
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'15. Esta consciente que un gato puede afilarse las unas en sus muebles y usar sus articulos personales como juguetes?'}
                            errors={errors}
                            refx={ register({ required: true })}
                            name={'email'}
                            >
                            {errors.firstName && "El email es requerido"}
                        </InputGeneric>
                    </div>
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={'14. En caso de salir de viaje o mudarse de casa, que hara con el gato?'}
                            errors={errors}
                            refx={ register({ required: false })}
                            name={'dpi'}
                            >
                        </InputGeneric>
                        
                        <InputGeneric
                            labelClass={'font-bold text-gray-600 text-xs leading-5 uppercase h-6 mx-2 mt-3'}
                            inputClass ={'p-1 px-2 appearance-none outline-none w-full text-gray-800'}
                            placeholder={''}
                            label={`16. El promedio de vida de un gato es de
                             15-20 años, esta dispuesto a convivir con el durante toda su vida y brindarle una vida digna?
                             lo que incluye pero no se limita a: vacunas anuales, visitas al veterinario de rutina y por enfermedad,
                             castracion, juguetes, accesorios, rascadores, dieta adecuada.`}
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
export default  AdopterSurvey;
