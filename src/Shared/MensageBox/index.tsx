import React from 'react'
import './mensage-box.scss'

const MensageBox: React.FC<any> = input => {
    return (
        <>
            <div className="msg-box">
                {input.icon && (
                    <span className={'msg-box__icon icon-' + input.icon}></span>
                )}
                <p className="msg-box__title">{input.title}</p>
                <p className="msg-box__text">{input.text}</p>

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
