import React from 'react'
import '../style/Button.css'

function button(props) {

    return <button
        onClick={
            e => props.click && props.click(props.label)
        }

        className={`button 
    ${props.opration ? 'opration' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>
}

export default button