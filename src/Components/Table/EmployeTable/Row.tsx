import React from 'react'
import { EmployeModel } from '../../../models'

interface RowProps{
    item: EmployeModel,
    setItem: React.Dispatch<React.SetStateAction<EmployeModel | null>>
}
export default function Row({ item, setItem }: RowProps) {
    const wd: any = window

    const onModify = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        wd.my_modal_1.showModal()
        setItem(item)
    }

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/logo.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item.first_name}</div>
                        <div className="text-sm opacity-50">{item.last_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {item.phone_number}
                <br />
                <span className="badge badge-ghost badge-sm">{item.email}</span>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">{item.salary}</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">{item.hire_date}</button>
            </th>

            <th><button onClick={onModify} className="btn btn-ghost btn-xs">modifier</button></th>
        </tr>
    )
}
