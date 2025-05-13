import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import React, { useId} from "react";
import {ErrorMessage} from "@/components";


interface Props extends React.HTMLAttributes<HTMLInputElement>{
    type?:"text"|"email"|"password"|"tel"|"number";
    label?: string;
    register: UseFormRegisterReturn<any>
    errors: FieldErrors<any>
}

export const Input = ({type="text" , errors , label , register , ...rest}: Props) => {
    const id = useId()
    const name = register.name;
    let hasErrors = false;
    if (errors && errors[name]){
        hasErrors = true;
    }
    return (
        <div className="mb-4">

            <div >
                {
                    label &&
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                }
                <input
                    {...rest}
                    id={id}
                    type={type}
                    {...register}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${hasErrors && "border-red"}`}
                />
            </div>
            <ErrorMessage name={name} errors={errors}/>
        </div>
    );
};