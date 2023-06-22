import React from 'react'
import Row from './Row'
import { EmployeModel } from '../../models'

interface TableProps{
    data: EmployeModel[]
}
export default function Table({ data }:TableProps) {
  return (
    <div className="overflow-x-auto">
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
                    { data.map((item, key)=> <Row key={key} item={item} />) }
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
