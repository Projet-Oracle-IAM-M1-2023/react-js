import React from 'react'
import Main from '../Components/Main'
import Loading from '../Components/Loading'
import { Table } from '../Components/Table'
import { useGetEmployeQuery } from '../services/api/Employe/EmployeApi'
import { showToastError } from '../services/toast'

export default function Employe() {

  const { data, isFetching, isError } = useGetEmployeQuery()

  isError && showToastError('Impossible de récupérer la liste des employées')
  
  return (
    <Main>
        { isFetching ? <Loading/> : <Table data={data ?? []} />}
    </Main>
  )
}
