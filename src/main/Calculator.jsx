import React, { useState } from 'react'

import '../style/Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

//State initial conserved
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    opration: null,
    values: [0, 0],
    current: 0
}

export default function Calculator() {

    //destructing object and spread props in displayActual
    const [displayAtual, setDisplay] = useState({ ...initialState })

    function clearMemory() {
        setDisplay({ ...initialState })
    }

    function setOpratiom(opration) {
        if (displayAtual.current === 0) {
            displayAtual.current = 1;
            displayAtual.clearDisplay = true
            displayAtual.opration = opration;
            setDisplay({ ...displayAtual })
        } else {
            const equalSymbol = opration === '='
            const currentOpration = displayAtual.opration
            const values = [...displayAtual.values]

            switch (currentOpration) {
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                default:
                    values[0] = values[0] / values[1]
                    break
            }
            displayAtual.values[1] = 0
            displayAtual.values[0] = values[0]
            displayAtual.displayValue = values[0]
            displayAtual.opration = equalSymbol ? null : opration
            displayAtual.current = equalSymbol ? 0 : 1
            displayAtual.clearDisplay = !equalSymbol
            setDisplay({ ...displayAtual })
        }
    }

    function addDigito(n) {

        if (n === '.' && displayAtual.displayValue.includes('.')) {
            return
        }

        console.log(displayAtual.displayValue);
        const clearDisplay = displayAtual.displayValue === '0' ||
            displayAtual.clearDisplay/*se o diplay for  0 ou tive valor true. */

        const currentValue = clearDisplay ? '' : displayAtual.displayValue
        const data = currentValue + n

        displayAtual.displayValue = data;
        displayAtual.clearDisplay = false
        setDisplay({ ...displayAtual })

        if (n !== '.') {
            const indice = displayAtual.current//'1'
            const newValue = parseFloat(data)//1

            displayAtual.values[indice] = newValue//dataValues[0] = 1
            setDisplay({ ...displayAtual })
            console.log(displayAtual.values);


        }

    }


    return (<div className="calculator">
        <Display value={displayAtual.displayValue} />
        <Button label="AC" click={clearMemory} triple />
        <Button label="/" click={setOpratiom} opration />
        <Button label="7" click={addDigito} />
        <Button label="8" click={addDigito} />
        <Button label="9" click={addDigito} />
        <Button label="*" click={setOpratiom} opration />
        <Button label="4" click={addDigito} />
        <Button label="5" click={addDigito} />
        <Button label="6" click={addDigito} />
        <Button label="-" click={setOpratiom} opration />
        <Button label="1" click={addDigito} />
        <Button label="2" click={addDigito} />
        <Button label="3" click={addDigito} />
        <Button label="+" click={setOpratiom} opration />
        <Button label="0" click={addDigito} double />
        <Button label="." click={addDigito} />
        <Button label="=" click={setOpratiom} opration />


    </div>
    )
}