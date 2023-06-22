import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EmployeModel } from '../../../models'
import { EMPLOYE_URL } from '../../url/API_URL'

const token =  localStorage.getItem('token')

export const EmployeApi = createApi({
    reducerPath: 'EmployeApi',
    baseQuery: fetchBaseQuery({baseUrl: EMPLOYE_URL}),
    endpoints: (builder) =>({
        getEmploye : builder.query<EmployeModel[], void>({
            query:() => ({
                method: 'GET',
                url: '/listEmployee',
                headers: { Authorization: `Bear ${token}` },
            })
        }),
        
        addEmploye : builder.mutation<void, EmployeModel>({
            query : (data: EmployeModel) => ({
                method : 'POST',
                url : '/createemployee',
                body : data,
                headers: { Authorization: `Bear ${token}` },
            })
        }),

        patchEmploye : builder.mutation<void, EmployeModel>({
            query : (data: EmployeModel) => ({
                method : 'PATCH',
                url : `/${data.employee_id}`,
                body : data,
                headers: { Authorization: `Bear ${token}` },
            })
        })
    })
})

export const { useGetEmployeQuery, useAddEmployeMutation, usePatchEmployeMutation }  = EmployeApi;