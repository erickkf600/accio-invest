import React from 'react'
import './modal-head.scss'

const ModalHead: React.FC<any> = input => {
    return (
        <div className="modal-head">
            <div className="modal-head__texts">
                <h1>{input.title}</h1>
                <p>{input.text}</p>
            </div>
            <button
                className="icon-x-circle close"
                onClick={input.close}
            ></button>
        </div>
    )
}

export default ModalHead
