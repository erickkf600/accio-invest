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
    const labelsTooltip = (tooltipItems: any) => {
        return `${tooltipItems.raw.ano} - ${tooltipItems.raw.valor.currency(
            'brl',
        )}`
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
                    title: () => '',
                    label: labelsTooltip,
                },
            },
        },
        parsing: {
            xAxisKey: 'label',
            yAxisKey: 'valor',
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
        datasets: input.content.map((dt: any, i: number) => {
            return {
                data: dt,
                barPercentage: i === 0 ? 0.8 : 0.9,
                backgroundColor:
                    i === 0
                        ? dt.map((el: any) => {
                              return el.valor < 0 ? '#663333' : '#B4BECC'
                          })
                        : dt.map((el: any) => {
                              return el.valor < 0 ? '#f000' : '#2b2b2b'
                          }),
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    opacity: i === 0 ? 0.4 : 0.7,
                    color: '#fff',
                    padding: {
                        top: 8,
                    },
                    font: {
                        weight: 'bold',
                    },
                },
            }
        }),
    }
    return <Bar options={options} data={data} />
}

export default Bars
