import React, { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
const Doughnuts: FC<any> = input => {
    const data: any = {
        labels: input.labels,
        datasets: [
            {
                data: input.content,
                backgroundColor: input.colors,
            },
        ],
    }
    return <Doughnut data={data} />
}

export default Doughnuts
