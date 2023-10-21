import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import * as yup from 'yup'
import { useResumeMovementsContext } from './add-perations.provider'
import './add-operation.scss'
import Template from './template'
import { useAssetsTypesContext } from '../../../service/providers/assets.provider'
import { useOperationsTypesContext } from '../../../service/providers/operation_types.provider'
import { updateMovement } from './../../../service/http/app.patch'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'

const AddOperation: React.FC<any> = input => {
    const client = useQueryClient()
    const { resumeMovements, setMovementsResume } = useResumeMovementsContext()
    const { assetstypes } = useAssetsTypesContext()
    const { operationtypes } = useOperationsTypesContext()
    const [opt, setOpt] = useState<number>(1)

    const validaForm = yup.object().shape({
        fees: yup.number().required('Este campo é obrigatório'),
        date_operation: yup.string().required('Este campo é obrigatório'),
        operation: yup.array().of(
            yup.object().shape({
                cod: yup.string().required('Este campo é obrigatório'),
                unity_value: yup.number().required('Este campo é obrigatório'),
                type: yup.number().required('Este campo é obrigatório'),
                type_operation: yup
                    .number()
                    .required('Este campo é obrigatório'),
                qtd: yup.number().required('Este campo é obrigatório'),
                obs: yup.string(),
            }),
        ),
    })
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isValid },
    } = useForm<any>({
        resolver: yupResolver(validaForm),
    })
    const { fields, append, remove } = useFieldArray({
        name: 'operation',
        control,
    })

    useEffect(() => {
        const newVal = opt || 0
        const oldVal = fields.length
        if (newVal > oldVal) {
            append({
                cod: input.content?.cod || '',
                unity_value: input.content?.unity_value,
                type: input.content?.type.id,
                type_operation: input.content?.type_operation.id,
                qtd: input.content?.qtd,
                obs: input.content?.obs || '',
            })
        } else {
            for (let i = oldVal; i > newVal; i--) {
                remove(i - 1)
            }
        }
    }, [opt])

    const resetForm = () => {
        reset({
            fees: null,
            date_operation: '',
            operation: [
                {
                    cod: input.content?.cod || '',
                    unity_value: input.content?.unity_value,
                    type: input.content?.type.id,
                    type_operation: input.content?.type_operation.id,
                    qtd: input.content?.qtd,
                    obs: input.content?.obs || '',
                },
            ],
        })
    }
    const cadPurchase = (data: any) => {
        if (
            data.operation.length > 1 &&
            data.operation.findIndex((el: any) => el.type_operation === 2) > -1
        ) {
            toast.error('So pode realizar uma venda por vez')
            return
        }
        const newValues = data.operation.map((el: any) => {
            return {
                cod: el.cod,
                date_operation: data.date_operation,
                qtd: el.qtd,
                type: el.type,
                type_operation: el.type_operation,
                unity_value: el.unity_value,
                obs: el.obs,
                fee: data.fees,
                total: el.unity_value * el.qtd,
                type_name: assetstypes.find((t: any) => t.id === el.type)
                    ?.title,
                operation_type_name: operationtypes.find(
                    (o: any) => o.id === el.type_operation,
                )?.title,
            }
        })
        const isSell: boolean = data.operation[0].type_operation === 2
        calcFees(newValues, data.fees, isSell)

        const setValue = [...resumeMovements, ...newValues]
        if (!!input.content) {
            patchMovement(setValue[0])
        } else {
            sessionStorage.setItem(
                'pre-register-movimentacao',
                JSON.stringify(setValue),
            )
            setMovementsResume(setValue)
            resetForm()
        }
    }

    const calcFees = (values: any, fees: number, sell: boolean) => {
        const sum = values.reduce(
            (acc: number, { total }: any) => (sell ? total - acc : total + acc),
            0,
        )
        return values.map((ell: any) => {
            const calc = Number(
                new Intl.NumberFormat('en-US').format((fees / sum) * ell.total),
            )
            const math = sell ? ell.total - calc : ell.total + calc
            return Object.assign(ell, {
                fee: calc,
                total: Number(new Intl.NumberFormat('en-US').format(math)),
            })
        })
    }
    handleSubmit(cadPurchase)

    const patchMovement = async (data: any) => {
        await updateMovement(data, input.content.id)
            // eslint-disable-next-line
      .then(_ => {
                toast.success('Sucesso')
                client.invalidateQueries(['moviments'])
            })
            .catch(err => {
                console.error(err)
                toast.error('Ocorreu um erro, tente novamente!')
            })
    }

    return (
        <>
            <Template
                register={register}
                handleSubmit={handleSubmit(cadPurchase)}
                operations={operationtypes}
                tipos={assetstypes}
                errors={errors}
                operation={fields.length}
                setOpt={setOpt}
                isValid={isValid}
                resume={resumeMovements}
                closeForm={input.closeForm}
                content={input.content}
            />
        </>
    )
}

export default AddOperation
