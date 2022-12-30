import React, { useState } from 'react'
import Accordion from '../../../../Shared/Accordion'
import { formSimulators } from './../forms.mock'
import { NumericFormat } from 'react-number-format'

const LiberdadeFinanceira: React.FC<any> = (input: any) => {
    const [type, setType] = useState<any>(0)
    return (
        <section className="calcs">
            <Accordion
                title="Liberdade Financeira"
                toggle={input.openTwo}
                setToggle={() => input.setOpenTwo(!input.openTwo)}
            >
                <div className="calcs__content">
                    <div className="calcs__content-form">
                        <select
                            className="edit-input"
                            defaultValue=""
                            onChange={(e: any) => setType(e.target.value)}
                            style={{
                                width: '88px',
                                marginLeft: '-9px',
                                top: '-40px',
                            }}
                        >
                            {formSimulators.map((form, i: number) => (
                                <option
                                    key={i}
                                    value={i}
                                    selected={i === 0}
                                    defaultValue=""
                                >
                                    {form.title}
                                </option>
                            ))}
                        </select>
                        <form
                            onSubmit={(e: any) =>
                                input.calcFinacial({
                                    event: e,
                                    type: formSimulators[type].type,
                                })
                            }
                        >
                            <div className="calcs__content-form-inputs calcs__content-form-inputs--type-two">
                                {formSimulators[type].inputs.map(
                                    (inp: any, i: number) => (
                                        <span className="form-control" key={i}>
                                            <label>{inp.label}</label>

                                            <NumericFormat
                                                type={inp.type}
                                                className="edit-input"
                                                defaultValue=""
                                                name={inp.name}
                                                thousandSeparator={'.'}
                                                decimalSeparator={','}
                                                onValueChange={(
                                                    values,
                                                    sourceInfo,
                                                ) => {
                                                    ;(
                                                        sourceInfo.event as any
                                                    ).target.setAttribute(
                                                        'floatValue',
                                                        values.floatValue,
                                                    )
                                                }}
                                            />
                                        </span>
                                    ),
                                )}
                            </div>
                            <button type="submit" className="btn">
                                calcular
                            </button>
                        </form>
                        <div className="divider-v"></div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="calcs__content-total-card">
                            <p>Resultado:</p>
                            <strong>{input.finalcialResult}</strong>
                        </div>
                    </div>
                </div>
            </Accordion>
        </section>
    )
}

export default LiberdadeFinanceira
