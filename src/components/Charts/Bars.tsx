import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import { months } from '../../mocks/months'
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    Tooltip,
} from 'chart.js'
const Bars: FC<any> = input => {
    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
    )
    const monthLabel = months.map((el: any) => el.title)
    const dataTrated = () => {
        return input.content.map((el: any) => {
            const monthIndex = el.data.split('/')[1] - 1
            return Object.assign(el, {
                NovoValor: el.valor == 0 ? 0.02 : Math.abs(el.valor),
                label: monthLabel[monthIndex],
                ano: el.data.split('/').at(-1),
            })
        })
    }
    const labelsTooltip = (tooltipItems: any) => {
        return `${tooltipItems.raw.valor.currency('brl')}`
    }
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: () => 'Índice',
                    label: labelsTooltip,
                },
            },
        },
        parsing: {
            xAxisKey: 'label',
            yAxisKey: 'NovoValor',
        },
        scales: {
            y: {
                grid: {
                    borderWidth: 2,
                    borderColor: '#000',
                    borderDash: [5],
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
            },
            x: {
                grid: {
                    borderWidth: 2,
                    borderColor: '#000',
                    display: false,
                },
            },
        },
    }

    const data: any = {
        labels: monthLabel,
        datasets: [
            {
                data: dataTrated(),
                backgroundColor: input.content.map((el: any) => {
                    return el.valor < 0 ? '#663333' : '#B4BECC'
                }),
                // barPercentage: 0.5,
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    opacity: 0.7,
                    color: '#fff',
                    padding: {
                        top: 8,
                    },
                    font: {
                        weight: 'bold',
                    },
                    formatter: (val: any) => {
                        return Math.abs(val.NovoValor) < 0.1
                            ? null
                            : `${val.valor.currency('brl')}`
                    },
                },
            },
            // {
            //     data: dataTrated(),
            //     backgroundColor: input.content.map((el: any) => {
            //         return el.valor < 0 ? '#f000' : '#00f'
            //     }),
            //     // barPercentage: 0.5,
            //     datalabels: {
            //         anchor: 'end',
            //         align: 'start',
            //         opacity: 0.7,
            //         color: '#fff',
            //         padding: {
            //             top: 8,
            //         },
            //         font: {
            //             weight: 'bold',
            //         },
            //         formatter: (val: any) => {
            //             return Math.abs(val.NovoValor) < 0.1
            //                 ? null
            //                 : `${val.valor}%`
            //         },
            //     },
            // },
        ],
    }
    return <Bar options={options} data={data} />
}

export default Bars
