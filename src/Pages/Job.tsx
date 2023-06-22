import React from 'react'
import Main from '../Components/Main'
import Loading from '../Components/Loading'
import { Table } from '../Components/Table/JobTable'
import { showToastError } from '../services/toast'
import { useGetJobQuery } from '../services/api/Jobs/JobApi'

export default function Job() {

  const { data, isFetching, isError } = useGetJobQuery()

  isError && showToastError('Impossible de récupérer la liste des jobs')

  return (
    <Main>
        { isFetching ? <Loading/> : <Table data={data ?? []} />}
    </Main>
  )
}
