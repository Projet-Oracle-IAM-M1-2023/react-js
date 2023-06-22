import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { JobModel } from '../../../models'
import { JOB_URL } from '../../url/API_URL'

export const JobApi = createApi({
    reducerPath: 'JobApi',
    baseQuery: fetchBaseQuery({baseUrl: JOB_URL}),
    endpoints: (builder) =>({
        getJob : builder.query<JobModel[], void>({
            query:() => ({
                method: 'GET',
                url: '/listJobs'
            })
        }),
        
        addJob : builder.mutation<void, JobModel>({
            query : (data: JobModel) => ({
                method : 'POST',
                url : '/createJobsEmployees',
                body : data
            })
        }),
    })
})

export const { useGetJobQuery, useAddJobMutation }  = JobApi;