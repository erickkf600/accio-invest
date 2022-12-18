import { TableContent } from '../../interfaces/table.interface'

export const head: TableContent[] = [
    {
        name: 'Cod',
        key: 'cod',
    },
    {
        name: 'Tipo',
        key: 'type',
    },
    {
        name: 'Qtd',
        key: 'qtd',
    },
    {
        name: 'Prc. Atual',
        key: 'curr_price',
        currency: true,
    },
    {
        name: 'DVs. Pd',
        key: 'payed_dividend',
        currency: true,
    },
]
export const headDividend: TableContent[] = [
    {
        name: 'Cod',
        key: 'cod',
    },
    {
        name: 'Data',
        key: 'date_operation',
    },
    {
        name: 'Qtd',
        key: 'qtd',
    },
    {
        name: 'Tipo',
        key: 'type',
    },
    {
        name: 'V. Un',
        key: 'unity_value',
        currency: true,
    },
    {
        name: 'Total',
        key: 'total',
        currency: true,
    },
]
export const headAporst: TableContent[] = [
    {
        name: 'Valor',
        key: 'value',
        currency: true,
    },
    {
        name: 'Mês',
        key: 'month',
    },
    {
        name: 'Ano',
        key: 'year',
    },
]
export const headPatrimony: TableContent[] = [
    {
        name: 'Valor',
        key: 'value',
        currency: true,
    },
    {
        name: 'Mês',
        key: 'month',
    },
    {
        name: 'Dividendo',
        key: 'dividend',
        currency: true,
    },
    {
        name: 'Rent.',
        key: 'rent',
    },
]

export const headVariations: TableContent[] = [
    {
        name: 'Cod',
        key: 'cod',
    },
    {
        name: 'Qtd',
        key: 'qtd',
    },
    {
        name: 'Tipo',
        key: 'type',
    },
    {
        name: 'Pr. At',
        key: 'curr_price',
        currency: true,
    },
    {
        name: 'Tot. Comp',
        key: 'total_purch',
        currency: true,
    },
    {
        name: 'Prc. At',
        key: 'current_total',
        currency: true,
    },
    {
        name: 'Saldo',
        key: 'balance',
        currency: true,
    },
    {
        name: 'Diferença',
        key: 'percet',
    },
]
