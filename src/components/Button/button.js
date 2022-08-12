import React from "react"
import { Button } from "react-bootstrap"
import "./style.css"
import IconBack from '../../assets/icons/IconBack.svg'

const handleNext = (props) => () => {
    if (props.currentState === 5) {
        console.log('handle pdf creation')
        return
    }
    props.setCurrentState(props.currentState + 1)
    props.setCanContinue(false)
}

const handlePrevious = (props) => () => {
    console.log(props)
    props.setCurrentState(props.currentState - 1)
    props.setCanContinue(false)
}

const ContinueButton = (props) => {
    let BtnName
    if (props.currentState === 3) {
        BtnName = 'Jetzt Prognose anzeigen'
    } else if (props.currentState === 4) {
        BtnName = 'Jetzt Kosten reduzieren'
    } else if (props.currentState === 5) {
        BtnName = 'Mehr zum HeizungsCheck'
    }
    else {
        BtnName = 'Weiter'
    }
    return (
        <>
            {props.canContinue
                ? (<Button variant="continue" onClick={handleNext(props)}>{BtnName}</Button>)
                : (<Button variant="continue" disabled>{BtnName}</Button>)}
        </>
    )
}

const BackButton = (props) => {
    return (
        <button className="btn-back" onClick={handlePrevious(props)}><img src={IconBack} alt='back-icon' /></button>
    )
}

export { ContinueButton, BackButton }