import React from 'react'
import * as yup from "yup";
import Field from '../Inputs/Field';
import { JobModel } from '../../models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddJobMutation } from '../../services/api/Jobs/JobApi';
import { showToastError, showToastSucces } from '../../services/toast';

const schema = yup.object().shape({
    job_id: yup.string().required('Ce champ est obligatoire'),
    job_title: yup.string().required('Ce champ est obligatoire'),
    min_salary: yup.number().required('Ce champ est obligatoire'),
    max_salary: yup.number().required('Ce champ est obligatoire')
}).required();

interface FormJobProps {
    editData?: JobModel
}
export default function FormJob({ editData }: FormJobProps) {
    const wd: any = window
    const [addJob] = useAddJobMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<JobModel>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (values: JobModel) => {
        console.log(values)

        addJob(values).unwrap()
            .then(res => showToastSucces('Le job a été ajouté'))
            .catch(err => showToastError('Erreur lors de l`ajout'))
    }


    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="modal-box">
                    <h3 className="font-bold text-lg">{editData ? 'Modifier un job' : 'Ajouter un job'}</h3>
                        <div className="div">
                            <Field
                                error={errors.job_id}
                                register={register}
                                label={'job id'}
                                placeholder={'JDKD'}
                                type={'text'}
                                name={'job_id'}
                            />
                            <Field
                                error={errors.job_title}
                                register={register}
                                label={'job title'}
                                placeholder={'Ingenieur'}
                                type={'text'}
                                name={'job_title'}
                            />
                            <Field
                                error={errors.min_salary}
                                register={register}
                                label={'Min salary'}
                                placeholder={'2000'}
                                type={'number'}
                                name={'min_salary'}
                            />
                            <Field
                                error={errors.max_salary}
                                register={register}
                                label={'Max salary'}
                                placeholder={'5000'}
                                type={'number'}
                                name={'max_salary'}
                            />
                        </div>

                        <br /><br />
                        <button type="submit" className="btn btn-outline btn-accent">
                            Ajouter
                        </button>
                    <div className="modal-action">
                        <button onClick={() => wd.my_modal_2.close()} className="btn">Fermer</button>
                    </div>
                </form>
            </dialog>
        </div>

    )
}
