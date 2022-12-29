import React from 'react'
import ModalHead from '../../components/ModalHead'
import './mensage-box.scss'

const MensageBox: React.FC<any> = input => {
    return (
        <>
            <div className="msg-box">
                <ModalHead title={input.title} text={input.text} />
                <div className="msg-box__actions">
                    {input.secondaryButton && (
                        <button
                            className="btn btn--extra-light"
                            onClick={() => input.onClose(false)}
                        >
                            {input.secondaryButton}
                        </button>
                    )}

                    {input.primaryButton && (
                        <button
                            className="btn"
                            onClick={() => {
                                input.onClose(true)
                            }}
                        >
                            {input.primaryButton}
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default MensageBox
