import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BancoDados from './BancoDados'
import Calculadoras from './Calculadoras'
import Cotacoes from './Cotacoes'
import Estimativas from './Estimativas'
import SideBar from './sideBar'
import TodoList from './TodoList'
import './tools.scss'
const Tools: React.FC = () => {
    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: '300px' }}>
                <Switch>
                    <Route exact path="/ferramentas/calculadoras">
                        <Calculadoras />
                    </Route>
                    <Route exact path="/ferramentas/cotacoes">
                        <Cotacoes />
                    </Route>
                    <Route exact path="/ferramentas/estimativas">
                        <Estimativas />
                    </Route>
                    <Route exact path="/ferramentas/banco-dados">
                        <BancoDados />
                    </Route>
                    <Route exact path="/ferramentas/todo-list">
                        <TodoList />
                    </Route>
                    <Redirect
                        from="/ferramentas"
                        to="ferramentas/calculadoras"
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Tools
