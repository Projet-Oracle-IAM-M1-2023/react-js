import React from 'react'
import Row from './Row'
import { JobModel } from '../../../models'
import './styles.css'
import FormJob from '../../Modal/FormJob'

interface TableProps {
    data: JobModel[]
}
export default function Table({ data }: TableProps) {
    const wd: any = window

    return (
        <div className="overflow-x-auto">  
            <button onClick={() => wd.my_modal_2.showModal()} className="btn btn-wide add-eply">Ajouter un job</button><br />
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Max salary</th>
                        <th>Min salary</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, key) => <Row key={key} item={item} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Max salary</th>
                        <th>Min salary</th>
                    </tr>
                </tfoot>

            </table>

            <FormJob />
        </div>
    )
}
