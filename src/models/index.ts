export type EmployeModel = {
    employee_id?: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    hire_date: string
    job_id: string
    salary: number
    commission_pct: null
}

export type JobModel = {
    job_id: string
    job_title: string
    min_salary: number
    max_salary: number
}