new MutationObserver(() => {
    Array.prototype.forEach.call(
        document.body.querySelectorAll('*[data-format]'),
        applyFormatMask,
    )
}).observe(document, { subtree: true, childList: true })

function applyFormatMask(field: any) {
    field.addEventListener('keyup', onInput)
    function onInput(e: any) {
        let { value } = e.target as HTMLInputElement
        let separator
        const clean = value.replace(/,/g, '')
        const regex = /^[0-9]*\.?[0-9]*$/

        if (value && clean.match(regex)) {
            if (!value.includes('.')) {
                const formatted = new Intl.NumberFormat().format(
                    parseFloat(clean),
                )
                separator = formatted
            } else {
                separator = value
            }
        } else {
            separator = ''
        }

        console.log(separator)

        // const removeNonNumeric = +value.toString().replace(/[^0-9]/g, '')
        // const addCommas = removeNonNumeric
        //     .toString()
        //     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

        // console.log(e.target)
        // let decimalPart
        // let array = Math.floor(+value)
        //     .toString()
        //     .split('')
        // let index = -3
        // while (array.length + index > 0) {
        //     array.splice(index, 0, '.')
        //     index -= 4
        // }
        // if (2 > 0) {
        //     decimalPart = (+value || 0).toFixed(2).split('.')[1]
        //     array.join('') + ',' + decimalPart
        // }
    }
}

export {}
