export const typeOne = (values: any) => {
    const validateForm = checkVals(values)
    let result = ''
    if (validateForm) {
        const capital: number = values.input1
        const aporte: number = values.input2
        const juros: number = values.input3
        const meses: number = values.input4
        //FORMULA
        // (capital * ((1 + (juros / 100)) ^ meses)) +
        //(aporte * (((((1 + (juros / 100))) ^ meses) − 1) / (juros / 100)))
        const calulation = (
            capital * Math.pow(1 + juros / 100, meses) +
            (aporte * (Math.pow(1 + juros / 100, meses) - 1)) / (juros / 100)
        ).toFixed(2)

        result = calulation
    }
    return result
}

export const typeTwo = (values: any) => {
    const validateForm = checkVals(values)
    let result = ''
    if (validateForm) {
        const objetivo: number = values.input1
        const atual: number = values.input2
        const juros: number = values.input3
        const meses: number = values.input4
    }
    return result
}
export const typeFour = (values: any) => {
    const validateForm = checkVals(values)
    let result = ''
    if (validateForm) {
        const objetivo: number = values.input1
        const atual: number = values.input2
        const aporte: number = values.input3
        const meses: number = values.input4
        console.log(objetivo)
    }
    return result
}

export const checkVals = (val: any) => {
    const formValues = Object.values(val)
    const check = formValues.map((el: any) => !el || /^\s*$/.test(el))
    const valid = check.every(el => el === false)
    return valid
}
