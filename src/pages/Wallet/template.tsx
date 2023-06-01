import React, { useEffect, useState } from 'react'
import Bars from '../../components/Charts/Bars'
import Table from '../../Shared/Table'
import {
    head,
    headAporst,
    headDividend,
    headPatrimony,
    headVariations,
} from './headers.mock'
const Template: React.FC<any> = input => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(
            input.aports.reduce(
                (acc: any, { total_fees }: any) => acc + +total_fees,
                0,
            ),
        )
    }, [input.aports])
    return (
        <section className="wallet">
            <h1>Minha Carteira</h1>

            <div className="wallet__tables table-scroll">
                <div>
                    <p className="wallet__tables-titles">Ativos</p>
                    <div className="card wallet__tables-cards">
                        <Table head={head} body={input.assets} hasDel={false} />
                    </div>
                </div>
                <div>
                    <p className="wallet__tables-titles">Lista de dividendos</p>
                    <div className="card wallet__tables-cards">
                        <Table
                            head={headDividend}
                            body={input.dividends}
                            hasDel={false}
                        />
                    </div>
                </div>
            </div>
            <div className="wallet__tables table-scroll">
                <div>
                    <p className="wallet__tables-titles">Aportes</p>
                    <div className="card wallet__tables-cards">
                        <Table
                            head={headAporst}
                            body={input.aports}
                            hasDel={false}
                            hasView={true}
                            abriModal={input.openModal}
                        />
                    </div>
                    <div className="wallet__tables-cards-total">
                        <strong>Total</strong>
                        <strong>{total.currency('brl')}</strong>
                    </div>
                </div>
                <div className="table-scroll">
                    <p className="wallet__tables-titles">Patrimônio x Ganho</p>
                    <div className="card wallet__tables-cards">
                        <Table
                            head={headPatrimony}
                            body={input.patrimony}
                            hasDel={false}
                        />
                    </div>
                </div>
            </div>

            <div className="wallet__charts table-scroll">
                <p>Variação da ultima compra</p>
                <div className="card wallet__charts-dividends">
                    <Table
                        head={headVariations}
                        body={input.variations}
                        hasDel={false}
                    />
                </div>
            </div>
            <div className="wallet__charts" style={{ marginTop: '70px' }}>
                <p>Comparação dividendos ano</p>
                <div className="card wallet__charts-dividends">
                    <Bars content={input.dataGraph} />
                </div>
            </div>
        </section>
    )
}

export default Template
