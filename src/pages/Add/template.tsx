import React from 'react'
import Table from './../../Shared/Table2'
const Template: React.FC<any> = input => {
    return (
        <section className="movimentacoes">
            <small>
                BUG: pesquisar /10 e filtrar por dividendos - selecionar o
                ultimo
            </small>
            <div className="card movimentacoes__card">
                <div className="card__padding">
                    <div className="movimentacoes__card-filter">
                        <span>
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="searchinput"
                                onChange={(e: any) => input.search(e)}
                            />
                        </span>
                        <span className="movimentacoes__card-filter-select">
                            <p>Filtrar</p>
                            <select
                                className="edit-input"
                                defaultValue=""
                                onChange={e => input.setFilter(e.target.value)}
                                style={{
                                    width: '88px',
                                    marginLeft: '-9px',
                                }}
                            >
                                <option value="" selected disabled>
                                    selecione
                                </option>
                                <option value="all">todos</option>
                                {input.filters.map((items: any, i: number) => (
                                    <option value={items.type} key={i}>
                                        {items.text}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    {input.content.length ? (
                        <form>
                            <Table
                                paginate={{
                                    currentPage: 1,
                                    itemsPerPage: 5,
                                    totalItems: input.total,
                                    changePage: (e: number) =>
                                        input.changePage(e),
                                    changeLimit: (e: number) =>
                                        input.changeLimit(e),
                                }}
                            >
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
                                                    input.setIsEdit(i)
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
