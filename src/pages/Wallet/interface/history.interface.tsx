export interface History {
    value: number
    month: string
    month_num: number
    items: ItemsEntity[]
    total_fees: number
    fees: number
}
export interface ItemsEntity {
    asset: string
    value: number
    qtd: number
    fee: number
}
