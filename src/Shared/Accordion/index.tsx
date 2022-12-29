import { Collapse } from '@material-ui/core'
import React from 'react'
import './accordion.scss'

const Accordion: React.FC<any> = ({
    title,
    toggle,
    setToggle,
    children,
}: any) => {
    return (
        <section className="accordion">
            <div className="card accordion__grid-card">
                <div
                    className="accordion__grid-card-title"
                    onClick={() => setToggle(!toggle)}
                >
                    <h2 className="accordion__grid-card-button">{title}</h2>
                    <span
                        className={
                            'icon-arrow-down-s arrow ' +
                            (toggle ? 'opened' : '')
                        }
                    ></span>
                </div>
                <Collapse in={toggle} timeout="auto" unmountOnExit>
                    <div className="accordion__content">{children}</div>
                </Collapse>
            </div>
        </section>
    )
}

export default Accordion
