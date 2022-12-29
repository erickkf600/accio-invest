import { TableContent } from '../../interfaces/table.interface'

export const head: TableContent[] = [
    {
        name: 'Cod',
        key: 'cod',
    },
    {
        name: 'Tp',
        key: 'type',
    },
    {
        name: 'Qtd',
        key: 'qtd',
    },
    {
        name: 'DV. Pg',
        key: 'payed_dividend',
        currency: true,
    },
    {
        name: 'Tot.',
        key: 'total',
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
        name: 'S. total',
        key: 'value',
        currency: true,
    },
    {
        name: 'Taxas',
        key: 'fees',
        currency: true,
    },
    {
        name: 'Mês',
        key: 'month',
    },
    {
        name: 'Total',
        key: 'total_fees',
        currency: true,
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
        name: 'Val. Comp(un)',
        key: 'purchase_price',
        currency: true,
    },
    {
        name: 'Val. At(un)',
        key: 'curr_price',
        currency: true,
    },
    {
        name: 'Tot. Comp',
        key: 'total_purch',
        currency: true,
    },
    {
        name: 'Tot. At',
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
