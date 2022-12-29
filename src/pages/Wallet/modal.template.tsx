import { Dialog } from '@material-ui/core'
import React from 'react'
import ModalHead from '../../components/ModalHead'
const Modal: React.FC<any> = input => {
    const handleClose = () => {
        input.setClose(false)
    }
    return (
        <Dialog open={input.open} onClose={handleClose}>
            <div className="items-list">
                <ModalHead title="Vizualizar os ativos" close={handleClose} />
                <ul>
                    {input.itemsList.map((el: any, i: number) => (
                        <li key={i}>
                            <span>
                                <p>{el.asset}</p>
                                <small>qtd: {el.qtd}</small>
                                <small>taxas: {el.fee}</small>
                            </span>
                            <p className="total">{el.value.currency('brl')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Dialog>
    )
}

export default Modal
