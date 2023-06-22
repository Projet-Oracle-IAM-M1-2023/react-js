import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface FieldProps{
    label: string
    placeholder: string,
    type: string,
    defaultValue?: string | number,
    register: UseFormRegister<any> | any,
    name: string,
    error: FieldError | undefined,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any,
}
export default function Field({ label, placeholder, type, defaultValue, register, name, error, onChange }: FieldProps) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input 
                {...register(name)}
                defaultValue={defaultValue}
                onChange={onChange}
                type={type}
                placeholder={placeholder} 
                className="input input-bordered w-full max-w-xs" 
            />
             { error && <p className='error'>{error.message}</p> }
        </div>
    )
}
