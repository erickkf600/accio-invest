export const formsPercent = [
    {
        type: 1,
        title: 'Tipo 1',
        result: 'typeOne',
        label1: 'Quanto é %',
        label2: 'De',
        example: '10 de 100 = 10%',
    },
    {
        type: 2,
        title: 'Tipo 2',
        result: 'typeTwo',
        label1: 'O valor',
        label2: 'é porcentagem de',
        example: '80 de 8000 = 1%',
    },
    {
        type: 3,
        title: 'Tipo 3',
        result: 'typeThree',
        label1: 'O valor',
        label2: 'aumentou para',
        example: '100 de 101 = 1%',
    },
    {
        type: 4,
        title: 'Tipo 4',
        result: 'typeFour',
        label1: 'O valor',
        label2: 'diminuiu para',
        example: '100 de 101 = -1%',
    },
]

export const formSimulators = [
    {
        type: 1,
        title: 'Simulador de patrimônio',
        result: '',
        inputs: [
            {
                label: 'poupança atual',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'investimento mensal',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'período (meses)',
                type: 'text',
                name: 'input4',
            },
        ],
    },
    {
        type: 2,
        title: 'Objetivo - Aporte nescessário',
        result: 'typeTwo',
        inputs: [
            {
                label: 'valor do objetivo',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'valor atual',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'período (meses)',
                type: 'text',
                name: 'input4',
            },
        ],
    },
    {
        type: 3,
        title: 'Objetivo - Taxa nescessária',
        result: 'typeThree',
        inputs: [
            {
                label: 'valor do objetivo',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'valor atual',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'período (meses)',
                type: 'text',
                name: 'input4',
            },
        ],
    },
    {
        type: 4,
        title: 'Objetivo - Tempo nescessário',
        result: 'typeThree',
        inputs: [
            {
                label: 'valor do objetivo',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'valor atual',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'período (meses)',
                type: 'text',
                name: 'input4',
            },
        ],
    },
    {
        type: 5,
        title: 'Aposentadoria - Gasto M',
        result: 'typeFour',
        inputs: [
            {
                label: 'valor do acumulado',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'período de gastos (meses)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'Saldo final desejado',
                type: 'text',
                name: 'input4',
            },
        ],
    },
    {
        type: 6,
        title: 'Aposentadoria - Período',
        result: 'typeFour',
        inputs: [
            {
                label: 'valor do acumulado',
                type: 'text',
                name: 'input1',
            },
            {
                label: 'juros (mês)',
                type: 'text',
                name: 'input2',
            },
            {
                label: 'período de gastos (meses)',
                type: 'text',
                name: 'input3',
            },
            {
                label: 'Saldo final desejado',
                type: 'text',
                name: 'input4',
            },
        ],
    },
]
