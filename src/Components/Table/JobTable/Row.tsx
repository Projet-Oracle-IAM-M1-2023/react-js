import React from 'react'
import { MdOutlineWork } from 'react-icons/md'
import { JobModel } from '../../../models'

interface RowProps{
    item: JobModel
}
export default function Row({ item }: RowProps) {
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
                            <MdOutlineWork size={35} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item.job_id}</div>
                        <div className="text-sm opacity-50">{item.job_title}</div>
                    </div>
                </div>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">{item.max_salary}</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">{item.min_salary}</button>
            </th>

            <th><button className="btn btn-ghost btn-xs">modifier</button></th>
        </tr>
    )
}
