import React, { useState } from 'react'
import Accordion from '../../../../Shared/Accordion'
import { formsPercent } from './../forms.mock'

const Porcentagens: React.FC<any> = (input: any) => {
    const [type, setType] = useState<any>(0)

    return (
        <section className="calcs">
            <Accordion
                title="Porcentagens"
                toggle={input.openOne}
                setToggle={() => input.setOpenOne(!input.openOne)}
            >
                <div className="calcs__content">
                    <div className="calcs__content-form">
                        <p>Exemplo: {formsPercent[type]?.example}</p>
                        <select
                            className="edit-input"
                            defaultValue=""
                            onChange={(e: any) => setType(e.target.value)}
                            style={{
                                width: '88px',
                                marginLeft: '-9px',
                            }}
                        >
                            {formsPercent.map((form, i: number) => (
                                <option
                                    key={i}
                                    title={`${form.label1} : ${form.label2}`}
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
                                input.calc({
                                    event: e,
                                    type: formsPercent[type].type,
                                })
                            }
                        >
                            <div className="calcs__content-form-inputs">
                                <span className="form-control">
                                    <label>{formsPercent[type].label1}</label>
                                    <input
                                        type="number"
                                        className="edit-input"
                                        name="percent"
                                        placeholder="0"
                                    />
                                </span>
                                <span className="form-control">
                                    <label>{formsPercent[type].label2}</label>
                                    <input
                                        type="number"
                                        className="edit-input"
                                        name="value"
                                        placeholder="0"
                                    />
                                </span>
                            </div>
                            <button type="submit" className="btn">
                                calcular
                            </button>
                        </form>
                        <div className="divider-v"></div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="calcs__content-total-card">
                            <p>Total:</p>
                            <strong>{input[formsPercent[type].result]}</strong>
                        </div>
                    </div>
                </div>
            </Accordion>
        </section>
    )
}

export default Porcentagens
