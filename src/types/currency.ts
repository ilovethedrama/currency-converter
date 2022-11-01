export type CurrencyConversionObject = {
    baseAmount: number,
    baseCurrency: string,
    convertedAmount: number,
    convertedCurrency: string,
}

export type CurrencyConversionResponseItem = {
    alphaCode: string,
    code: string,
    date: string,
    inverseRate: number,
    name: string,
    numericCode: string,
    rate: number,
}