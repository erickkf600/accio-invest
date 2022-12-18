import React from 'react'
import Bars from '../../components/Charts/Bars'
import Doughnuts from '../../components/Charts/Doughnuts'
import { dataMock } from '../../mocks/data.mock'
import Table from '../../Shared/Table'
const Template: React.FC<any> = ({ month, head, data }: any) => {
    return (
        <section className="home">
            <div className="home__grid">
                <div className="card home__grid-card">
                    <strong>Total Investido</strong>
                    <p>R$ 15.000,00</p>
                </div>
                <div className="card home__grid-card">
                    <strong>
                        Aporte em {month?.full_name?.captalizeCase()}
                    </strong>
                    <p>R$ 15.000,00</p>
                </div>
                <div className="card home__grid-card">
                    <strong>Dividendos do mês</strong>
                    <p>R$ 10,20</p>
                </div>
                <div className="card home__grid-card">
                    <strong>Patrimônio</strong>
                    <p>R$ 200,00</p>
                </div>
            </div>

            <div className="home__infos">
                <div className="home__chart">
                    <div className="card home__chart-doughnut">
                        <strong>Alocações</strong>
                        <div className="chart">
                            <div className="home__chart-doughnut-size">
                                <Doughnuts
                                    content={[12, 19, 50]}
                                    labels={['FIIs', 'Ações', 'Renda Fixa']}
                                    colors={['#00A7D7', '#1BAA9C', '#3E1191']}
                                />
                            </div>
                            <div className="home__chart-doughnut-labels">
                                <p>FIIs</p>
                                <p>Ações</p>
                                <p>Renda Fixa</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__infos-next-payments">
                    <strong>Stores</strong>
                    <Table head={head} body={data} hasDel={false} />
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <h1 style={{ margin: '100px 0 0' }}>Aportes</h1>
                <div className="home__chart">
                    <div className="card home__chart-bars">
                        <Bars content={dataMock} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Template
