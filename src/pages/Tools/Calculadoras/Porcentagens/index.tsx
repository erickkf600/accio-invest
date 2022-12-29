import React from 'react'
import Accordion from '../../../../Shared/Accordion'
import { formsPercent } from './../forms.mock'

const Porcentagens: React.FC<any> = (input: any) => {
    return (
        <section className="calcs">
            <Accordion
                title="Porcentagens"
                toggle={input.openOne}
                setToggle={() => input.setOpenOne(!input.openOne)}
            >
                <div className="calcs__card">
                    {formsPercent.map((form, i: number) => (
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

export default Porcentagens
