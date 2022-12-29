import React from 'react'
import Accordion from '../../../../Shared/Accordion'
import { formSimulators } from './../forms.mock'

const LiberdadeFinanceira: React.FC<any> = (input: any) => {
    return (
        <section className="calcs">
            <Accordion
                title="Liberdade Financeira"
                toggle={input.openTwo}
                setToggle={() => input.setOpenTwo(!input.openTwo)}
            >
                <div className="calcs__card">
                    {formSimulators.map((form, i: number) => (
                        <div className="calcs__card-inputs" key={i}>
                            <h3>{form.title}</h3>
                            <form
                                className="calcs__card-inputs-item"
                                onSubmit={(e: any) =>
                                    input.calc({
                                        event: e,
                                        type: form.type,
                                    })
                                }
                            >
                                <div className="calcs__card-inputs-item-content">
                                    <span className="form-control">
                                        <label>{form.label1}</label>
                                        <input
                                            type="number"
                                            className="edit-input"
                                            name="percent"
                                            placeholder="0"
                                        />
                                    </span>
                                    <span className="form-control">
                                        <label>{form.label2}</label>
                                        <input
                                            type="number"
                                            className="edit-input"
                                            name="value"
                                            placeholder="0"
                                        />
                                    </span>
                                </div>

                                <div className="calcs__card-inputs-item-footer">
                                    <p className="calcs__card-inputs-result">
                                        Resultado: {input[form.result]}
                                    </p>
                                    <button type="submit" className="btn">
                                        calcular
                                    </button>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>
            </Accordion>
        </section>
    )
}

export default LiberdadeFinanceira
