import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
const SideBar: React.FC = () => {
    return (
        <section className="sub-side-nav">
            <h1>Tipos de Ferramentas</h1>
            <nav className="sub-side-nav__list">
                <NavLink
                    to="/ferramentas/calculadoras"
                    activeClassName="active"
                >
                    Calculadoras
                </NavLink>
                <NavLink to="/ferramentas/estimativas" activeClassName="active">
                    Estimativas
                </NavLink>
                <NavLink to="/ferramentas/cotacoes" activeClassName="active">
                    Cotações
                </NavLink>
                <NavLink to="/ferramentas/todo-list" activeClassName="active">
                    Todo List
                </NavLink>
                <NavLink to="/ferramentas/banco-dados" activeClassName="active">
                    Banco de Dados
                </NavLink>
            </nav>
        </section>
    )
}

export default SideBar
