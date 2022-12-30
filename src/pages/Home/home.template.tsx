import React from 'react'
import Bars from '../../components/Charts/Bars'
import Doughnuts from '../../components/Charts/Doughnuts'
const Template: React.FC<any> = (input: any) => {
    return (
        <section className="home">
            <div className="home__grid">
                <div className="card home__grid-card">
                    <strong>Total Investido</strong>
                    <p>
                        {(input.response?.resume?.total || 0).currency('brl')}
                    </p>
                </div>
                <div className="card home__grid-card">
                    <strong>Último Aporte</strong>
                    <p>{(input.response?.resume?.last || 0).currency('brl')}</p>
                </div>
                <div className="card home__grid-card">
                    <strong>Último pagamento</strong>
                    <p>
                        {(input.response?.resume?.last_dividend || 0).currency(
                            'brl',
                        )}
                    </p>
                </div>
                <div className="card home__grid-card">
                    <strong>Patrimônio</strong>
                    <p>
                        {(input.response?.resume?.patrimony || 0).currency(
                            'brl',
                        )}
                    </p>
                </div>
            </div>

            <div className="home__infos">
                <div className="home__chart">
                    <div className="card home__chart-doughnut">
                        <strong>Alocações</strong>
                        <div className="chart">
                            <div className="home__chart-doughnut-size">
                                <Doughnuts
                                    content={input.doughnutContent}
                                    labels={input.doughnutLabel}
                                    colors={input.doughnutColor}
                                />
                            </div>
                            <div className="home__chart-doughnut-labels">
                                {input.doughnutLabel.map(
                                    (res: string, i: number) => (
                                        <p key={i}>{res}</p>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__chart">
                    <div className="card home__chart-doughnut">
                        <strong>Distribuição - Renda Variável</strong>
                        <div
                            className="chart"
                            style={{ justifyContent: 'center' }}
                        >
                            <div className="home__chart-doughnut-size">
                                <Doughnuts
                                    content={input.distContent}
                                    labels={input.distLabel}
                                    colors={input.distColor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <h1 style={{ margin: '100px 0 0' }}>Aportes</h1>
                <div className="home__chart">
                    <div className="card home__chart-bars">
                        <Bars content={input.aports} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Template
