import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { TableContent } from '../../interfaces/table.interface'
import './home.scss'
import Template from './home.template'
import useHomeQuery from './service/home.query'

const Home: React.FC<any> = input => {
    const { data, isError, isLoading } = useHomeQuery()
    const [doughnutContent, setDoughnutContent] = useState<number[]>([])
    const [doughnutLabel, setDoughnutLabel] = useState<string[]>([])
    const [doughnutColor, setDoughnutColor] = useState<string[]>([])

    const [distContent, setDistContent] = useState<number[]>([])
    const [distLabel, setDistLabel] = useState<string[]>([])
    const [distColor, setDistColor] = useState<string[]>([])

    const [aports, setAports] = useState<any>([[]])
    useEffect(() => {
        createPage()
    }, [data])
    if (isError) {
        toast.error('Ocorreu um erro, tente novamente!')
    }
    const createPage = () => {
        if (!isLoading) {
            setDoughnutContent(setValue(data, 'alocations', 'total'))
            setDoughnutLabel(setValue(data, 'alocations', 'type'))
            setDoughnutColor(setValue(data, 'alocations', 'hex'))
            setDistContent(setValue(data, 'distribuition', 'qtd'))
            setDistLabel(setValue(data, 'distribuition', 'title'))
            setDistColor(setValue(data, 'distribuition', 'hex'))
            setAports(data?.aports)
        }
    }
    const setValue = (array: any, key: string, key2: string) => {
        return array[key].map((el: any) => el[key2])
    }

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
