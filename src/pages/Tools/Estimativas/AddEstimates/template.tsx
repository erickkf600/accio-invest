import { TextField } from '@material-ui/core'
import React from 'react'
import Resume from './resume'
const Template: React.FC<any> = input => {
    const arrayOperations: any = () => {
        return [...Array(input.operation || 0).keys()]
    }
    return (
        <section className="add-estimates">
            <div className="add-estimates__content">
                <div className="card">
                    <form className="add-estimates__content-form">
                        {arrayOperations().map((_: any, index: number) => (
                            <div
                                className="add-estimates__content-form-purchase"
                                key={index}
                            >
                                <div className="add-estimates__content-form-purchase-grid">
                                    <TextField
                                        id="filled-basic"
                                        label="Cód. Ativo"
                                        defaultValue=""
                                        inputProps={{
                                            'data-uppercase': '',
                                        }}
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.cod
                                        }
                                        {...input.register(
                                            `operation.[${index}].cod`,
                                        )}
                                        variant="filled"
                                    />
                                    <TextField
                                        label="Valor Unitário"
                                        inputProps={{
                                            'data-currency': '',
                                            inputMode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        defaultValue=""
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.unity_value
                                        }
                                        {...input.register(
                                            `operation.[${index}].unity_value`,
                                        )}
                                        variant="filled"
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Qtd"
                                        defaultValue=""
                                        type="number"
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.qtd
                                        }
                                        {...input.register(
                                            `operation.[${index}].qtd`,
                                        )}
                                        variant="filled"
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Data"
                                        variant="filled"
                                        defaultValue={
                                            input.content?.date_operation
                                        }
                                        inputProps={{
                                            'data-mask': '00/0000',
                                        }}
                                        error={!!input.errors?.date_operation}
                                        {...input.register(
                                            `operation.[${index}].date_operation`,
                                        )}
                                    />
                                    {index > 0 && (
                                        <button
                                            onClick={() =>
                                                input.setOpt(
                                                    input.operation - 1,
                                                )
                                            }
                                            type="button"
                                            className="icon-remove-circle add-estimates__content-form-purchase-remove"
                                        ></button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {!input.content && (
                            <button
                                onClick={() =>
                                    input.setOpt(input.operation + 1)
                                }
                                className="add-estimates__content-form-add"
                                type="button"
                            >
                                Adicionar <span className="icon-add"></span>
                            </button>
                        )}

                        <button
                            type="button"
                            className="btn btn--light add-estimates__content-form-add-purch"
                            onClick={() => input.handleSubmit()}
                        >
                            {!!input.content
                                ? 'Editar Estimativa'
                                : 'Adicionar Estimativa'}
                        </button>
                    </form>
                    {!!input.resume.length && (
                        <Resume closeForm={input.closeForm} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Template
