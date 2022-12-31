import React from 'react'
import Table from './../../../Shared/Table2'
const Template: React.FC<any> = input => {
    return (
        <section className="movimentacoes">
            <div className="card movimentacoes__card">
                <div className="card__padding">
                    {input.content.length ? (
                        <form>
                            <Table>
                                <tr key="head">
                                    <th>Cod.</th>
                                    <th>Operação</th>
                                    <th>Ativo</th>
                                    <th>Qtd</th>
                                    <th>Valor Unit.</th>
                                    <th>Taxa</th>
                                    <th>Data</th>
                                    <th>Total</th>
                                    <th>Ação</th>
                                </tr>

                                {input.content.map((res: any, i: number) => (
                                    <tr key={i}>
                                        <td>{res?.cod}</td>
                                        <td>{res?.type_operation.title}</td>
                                        <td>{res?.type.title}</td>
                                        <td>{res?.qtd}</td>
                                        <td>
                                            {res?.unity_value.currency('brl')}
                                        </td>
                                        <td>{res?.fee.currency('brl')}</td>
                                        <td>{res?.date_operation}</td>
                                        <td>{res?.total.currency('brl')}</td>
                                        <td
                                            className="action"
                                            style={{ textAlign: 'center' }}
                                        >
                                            <button
                                                type="button"
                                                className="icon-info"
                                                onClick={() =>
                                                    input.showObs(res.obs)
                                                }
                                            ></button>
                                            <button
                                                type="button"
                                                className="icon-edit"
                                                onClick={() =>
                                                    input.setIsEdit(res)
                                                }
                                            ></button>
                                            <button
                                                type="button"
                                                className="icon-trash-2"
                                                onClick={() =>
                                                    input.deleteMov(res.id)
                                                }
                                            ></button>
                                        </td>
                                    </tr>
                                ))}
                            </Table>
                        </form>
                    ) : (
                        <h1 style={{ marginTop: '20px', textAlign: 'center' }}>
                            sem dados
                        </h1>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Template
