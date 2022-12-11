import React from 'react'
import Bars from '../../components/Charts/Bars'
import { TableContent } from '../../interfaces/table.interface'
import { dataMock } from '../../mocks/data.mock'
import Table from '../../Shared/Table'
const Template: React.FC<any> = input => {
    const head: TableContent[] = [
        {
            name: 'Cod',
            key: 'cod',
        },
        {
            name: 'Operação',
            key: 'type',
        },
        {
            name: 'Prc. Atual',
            key: 'curr_price',
            currency: true,
        },
        {
            name: 'DVs. Pd',
            key: 'payed_dividend',
            currency: true,
        },
    ]
    return (
        <section className="wallet">
            <h1>Minha Carteira</h1>

            <div className="wallet__tables">
                <div>
                    <p className="wallet__tables-titles">Ativos</p>
                    <div className="card wallet__tables-cards">
                        <Table head={head} body={input.assets} hasDel={false} />
                    </div>
                </div>
                <div>
                    <p className="wallet__tables-titles">
                        Lista de dividendos
                        {/* lista de aportes com vizualização de nota de corretagem? */}
                    </p>
                    <div className="card wallet__tables-cards"></div>
                </div>
            </div>

            <div className="wallet__charts">
                <span className="wallet__charts-wrapper">
                    <p>Aportes no ano</p>
                    <div className="card wallet__charts-apports">
                        <Bars content={input.aports} />
                    </div>
                </span>

                <span className="wallet__charts-wrapper">
                    <p>Dividendos no ano</p>
                    <div className="card wallet__charts-dividends">
                        <Bars content={dataMock} />
                    </div>
                </span>
            </div>
        </section>
    )
}

export default Template
