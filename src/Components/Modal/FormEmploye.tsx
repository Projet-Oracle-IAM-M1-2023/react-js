import React from 'react'
import * as yup from "yup";
import Field from '../Inputs/Field';
import Select from '../Inputs/Select';
import { EmployeModel, JobModel } from '../../models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showToastError, showToastSucces } from '../../services/toast';
import { useAddEmployeMutation, usePatchEmployeMutation } from '../../services/api/Employe/EmployeApi';
import { useGetJobQuery } from '../../services/api/Jobs/JobApi';

type SelectType = {
    label: string,
    value: string | number
}

const schema = yup.object().shape({
    first_name: yup.string().required('Ce champ est obligatoire'),
    last_name: yup.string().required('Ce champ est obligatoire'),
    email: yup.string().required('Ce champ est obligatoire'),
    phone_number: yup.string().required('Ce champ est obligatoire'),
    hire_date: yup.string().required('Ce champ est obligatoire'),
    salary: yup.number().required('Ce champ est obligatoire'),
    job_id: yup.string().required('Ce champ est obligatoire'),
}).required();

interface FormEmployeProps {
    editData: EmployeModel | null
}

const DataToSelect = (data: JobModel[] | undefined): SelectType[] => {
    if (!data) return []

    var new_arr: SelectType[] = []

    data.map((dt) => new_arr.push({ label: dt.job_title, value: dt.job_id || 0 }))

    return new_arr
}

export default function FormEmploye({ editData }: FormEmployeProps) {
    const wd: any = window

    const [addEmploye] = useAddEmployeMutation()
    const [editEmploye] = usePatchEmployeMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<EmployeModel>({
        resolver: yupResolver(schema)
    });

    const { data: dataJob } = useGetJobQuery()

    const onSubmit = (values: EmployeModel) => {
        const data = { commission_pct: null, ...values }

        editData ?
            editEmploye(data).unwrap()
                .then(res => showToastSucces('Le job a été ajouté'))
                .catch(err => showToastError('Erreur lors de l`ajout'))
            :
            addEmploye(data).unwrap()
                .then(res => showToastSucces('Le job a été ajouté'))
                .catch(err => showToastError('Erreur lors de l`ajout'))
    }


    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="modal-box">
                    <h3 className="font-bold text-lg">{editData ? 'Modifier un employe' : 'Ajouter un employe'}</h3>
                    <div className="div">
                        <Field
                            error={errors.first_name}
                            defaultValue={ editData ? editData.first_name : '' }
                            register={register}
                            label={'First name'}
                            placeholder={'Malik'}
                            type={'text'}
                            name={'first_name'}
                        />
                        <Field
                            error={errors.last_name}
                            defaultValue={ editData ? editData.last_name : '' }
                            register={register}
                            label={'Last name'}
                            placeholder={'Diop'}
                            type={'text'}
                            name={'last_name'}
                        />
                        <Field
                            error={errors.email}
                            defaultValue={ editData ? editData.email : '' }
                            register={register}
                            label={'Email'}
                            placeholder={'oui@oracle.com'}
                            type={'number'}
                            name={'email'}
                        />
                        <Field
                            error={errors.phone_number}
                            defaultValue={ editData ? editData.phone_number : '' }
                            register={register}
                            label={'Phone number'}
                            placeholder={'778143610'}
                            type={'text'}
                            name={'phone_number'}
                        />
                        <Field
                            error={errors.hire_date}
                            defaultValue={ editData ? editData.hire_date : '' }
                            register={register}
                            label={'Hire date'}
                            placeholder={'12/05/2022'}
                            type={'text'}
                            name={'hire_date'}
                        />
                        <Field
                            error={errors.salary}
                            defaultValue={ editData ? editData.salary : '' }
                            register={register}
                            label={'Salaire'}
                            placeholder={'1500 usd'}
                            type={'number'}
                            name={'salary'}
                        />

                        <Select
                            data={DataToSelect(dataJob)}
                            defaultSelected={ editData ? editData.job_id : '' }
                            register={register}
                            error={errors.job_id}
                            label={"Selectionner le job"}
                            name={'job_id'}
                        />
                    </div>

                    <br /><br />
                    <button type="submit" className="btn btn-outline btn-accent">
                        Ajouter
                    </button>
                    <div className="modal-action">
                        <button onClick={() => wd.my_modal_1.close()} className="btn">Fermer</button>
                    </div>
                </form>
            </dialog>
        </div>

    )
}
