import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EmployeModel } from '../../../models'
import { EMPLOYE_URL } from '../../url/API_URL'

export const EmployeApi = createApi({
    reducerPath: 'EmployeApi',
    baseQuery: fetchBaseQuery({baseUrl: EMPLOYE_URL}),
    endpoints: (builder) =>({
        getEmploye : builder.query<EmployeModel[], void>({
            query:() => ({
                method: 'GET',
                url: '/listEmployee'
            })
        }),
        
        addEmploye : builder.mutation<void, EmployeModel>({
            query : (data: EmployeModel) => ({
                method : 'POST',
                url : '/createemployee',
                body : data
            })
        }),

        patchEmploye : builder.mutation<void, EmployeModel>({
            query : (data: EmployeModel) => ({
                method : 'PATCH',
                url : `/${data.employee_id}`,
                body : data
            })
        })
    })
})

export const { useGetEmployeQuery, useAddEmployeMutation, usePatchEmployeMutation }  = EmployeApi;