import React, { useEffect, useState } from 'react'
import { TableContent } from '../../interfaces/table.interface'
import './home.scss'
import Template from './home.template'
import { toast } from 'react-toastify'
import { getResume } from '../../service/http/app.get'
import { hexGenerator } from '../../utils/consts/hex-generator'

const Home: React.FC<any> = input => {
    const [data, setData] = useState<any>([])
    const [doughnutContent, setDoughnutContent] = useState<number[]>([])
    const [doughnutLabel, setDoughnutLabel] = useState<string[]>([])
    const [doughnutColor, setDoughnutColor] = useState<string[]>([])

    const [distContent, setDistContent] = useState<number[]>([])
    const [distLabel, setDistLabel] = useState<string[]>([])
    const [distColor, setDistColor] = useState<string[]>([])

    const [aports, setAports] = useState<any>([[]])
    useEffect(() => {
        getResumeData()
    }, [])
    const tabelMock = [
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
        { cod: 'MXRF11', value: 0.08, date: '14/12/2022', total: 1 },
    ]
    const head: TableContent[] = [
        {
            name: 'Cod',
            key: 'cod',
        },
        {
            name: 'Valor',
            key: 'value',
            currency: true,
        },
        {
            name: 'Date',
            key: 'date',
        },
        {
            name: 'Total',
            key: 'total',
            currency: true,
        },
    ]
    const getResumeData = async () => {
        await getResume()
            .then((res: any) => {
                console.log(res)
                setData(res)
                setDoughnutContent(setValue(res, 'alocations', 'total'))
                setDoughnutLabel(setValue(res, 'alocations', 'type'))
                setDoughnutColor(setValue(res, 'alocations', 'hex'))

                setDistContent(setValue(res, 'distribuition', 'qtd'))
                setDistLabel(setValue(res, 'distribuition', 'title'))
                setDistColor(setValue(res, 'distribuition', 'hex'))

                setAports(res.aports)
            })
            .catch(err => {
                console.error(err)
                toast.error('Ocorreu um erro, tente novamente!')
            })
    }

    const setValue = (array: any, key: string, key2: string) => {
        return array[key].map((el: any) => el[key2])
    }
    return (
        <Template
            month={input.month}
            head={head}
            data={tabelMock}
            response={data}
            doughnutContent={doughnutContent}
            doughnutLabel={doughnutLabel}
            doughnutColor={doughnutColor}
            distContent={distContent}
            distLabel={distLabel}
            distColor={distColor}
            aports={aports}
        />
    )
}

export default Home
