import React, { useState } from 'react'
import Template from './template'
import './calculadoras.scss'
import * as finCalc from './LiberdadeFinanceira/calc'
const Calculadoras: React.FC = () => {
    const [openOne, setOpenOne] = useState<boolean>(true)
    const [openTwo, setOpenTwo] = useState<boolean>(true)
    const [typeOne, setTypeOne] = useState<number | null>(null)
    const [typeTwo, setTypeTwo] = useState<string>('')
    const [typeThree, setTypeThree] = useState<string>('')
    const [typeFour, setTypeFour] = useState<string>('')
    const [finalcialResult, setFinalcialResult] = useState<string>('')
    const calc = ({ event, type }: any) => {
        event.preventDefault()
        const percent = event.target.elements.percent.value
        const value = event.target.elements.value.value
        switch (type) {
            case 1:
                setTypeOne((value * percent) / 100)
                break
            case 2:
                setTypeTwo(
                    parseFloat(((percent / value) * 100).toString()).toFixed(
                        2,
                    ) + '%',
                )
                break
            case 3:
                setTypeThree(
                    parseFloat(
                        (((value - percent) / percent) * 100).toString(),
                    ).toFixed(2) + '%',
                )
                break
            case 4:
                setTypeFour(
                    parseFloat(
                        (((percent - value) / percent) * 100).toString(),
                    ).toFixed(2) + '%',
                )
                break

            default:
                break
        }
    }
    const calcFinacial = ({ event, type }: any) => {
        event.preventDefault()
        const form = {
            input1: +event.target.elements.input1.getAttribute('floatValue'),
            input2: +event.target.elements.input2.getAttribute('floatValue'),
            input3: +event.target.elements.input3.getAttribute('floatValue'),
            input4: +event.target.elements.input4.getAttribute('floatValue'),
        }
        switch (type) {
            case 1:
                setFinalcialResult(finCalc.typeOne(form))
                break
            case 2:
                setFinalcialResult(finCalc.typeTwo(form))
                break
            case 4:
                setFinalcialResult(finCalc.typeFour(form))
                break

            default:
                break
        }
    }
    return (
        <Template
            calc={(e: any) => calc(e)}
            calcFinacial={(e: any) => calcFinacial(e)}
            finalcialResult={finalcialResult}
            typeOne={typeOne}
            typeTwo={typeTwo}
            typeThree={typeThree}
            typeFour={typeFour}
            openOne={openOne}
            setOpenOne={setOpenOne}
            openTwo={openTwo}
            setOpenTwo={setOpenTwo}
        />
    )
}

export default Calculadoras
