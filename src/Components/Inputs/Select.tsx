import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
    label: string,
    name: string,
    register: UseFormRegister<any>,
    error: FieldError | undefined,
    data: { label: string, value: string | number }[],
    defaultSelected?: string | number,
    Onchange?: (e: React.ChangeEvent<HTMLSelectElement>) => any
}
export default function Select({ label, name, register, error, data, Onchange, defaultSelected='' }: Props) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select 
                {...register(name)}
                onChange={Onchange}
                name={name}
                className="select select-bordered"  
            >
                <option disabled selected>{name}</option>
                { data.map((dt) => <option selected={String(defaultSelected) === String(dt.value)} value={dt.value}>{dt.label}</option> )}
            </select>
            { error && <p className='error'>{error.message}</p> }
        </div>
    )
}
