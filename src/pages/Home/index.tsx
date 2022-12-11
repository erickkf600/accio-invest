import React from 'react'
import { TableContent } from '../../interfaces/table.interface'
import './home.scss'
import Template from './home.template'

const Home: React.FC<any> = input => {
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
    return <Template month={input.month} head={head} data={tabelMock} />
}

export default Home
