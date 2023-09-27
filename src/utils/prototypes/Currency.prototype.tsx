/* eslint-disable no-unused-vars */
export {}

declare global {
    interface Number {
        currency(type?: string, decimals?: number): string
    }
}

Number.prototype.currency = function (
    type: string = 'brl',
    decimals: number = 3,
): string {
    const currencyFormat = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: type.toUpperCase(),
        maximumFractionDigits: decimals,
    }).format(+this)
    return currencyFormat
}
