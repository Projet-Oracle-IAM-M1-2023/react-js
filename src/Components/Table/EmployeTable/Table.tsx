import React, { useState } from 'react'
import Row from './Row'
import FormEmploye from '../../Modal/FormEmploye'
import { EmployeModel } from '../../../models'
import './styles.css'

interface TableProps {
    data: EmployeModel[]
}
export default function Table({ data }: TableProps) {
    const [item, setItem] = useState<EmployeModel | null>(null)

    const wd: any = window

    return (
        <div className="overflow-x-auto">  
        <FormEmploye editData={item} setItem={setItem} />
            <button onClick={() => wd.my_modal_1.showModal()} className="btn btn-wide add-eply">Ajouter un employe</button><br />
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Salaire</th>
                        <th>Date d'embauche</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, key) => <Row key={key} setItem={setItem} item={item} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Salaire</th>
                        <th>Date d'embauche</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
