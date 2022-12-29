import React from 'react'
import LiberdadeFinanceira from './LiberdadeFinanceira'
import Porcentagens from './Porcentagens'

const Template: React.FC<any> = (input: any) => {
    return (
        <>
            <Porcentagens {...input} />
            <LiberdadeFinanceira {...input} />
        </>
    )
}

export default Template
