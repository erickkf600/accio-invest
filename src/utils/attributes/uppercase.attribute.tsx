new MutationObserver(() => {
    Array.prototype.forEach.call(
        document.body.querySelectorAll('*[data-uppercase]'),
        applyUpperCase,
    )
}).observe(document, { subtree: true, childList: true })

function applyUpperCase(field: any) {
    field.addEventListener('keyup', onInput)
    function onInput(e: KeyboardEvent) {
        let { value } = e.target as HTMLInputElement
        field.value = value.toLocaleUpperCase()
    }
}

export {}
