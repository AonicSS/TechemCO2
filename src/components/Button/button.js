import React from "react"
import { Button } from "react-bootstrap"
import "./style.css"
import IconBack from '../../assets/icons/IconBack.svg'

const handleNext = (props) => () => {
    props.setCurrentSelected(0)
    props.setCurrentState(props.currentState + 1)
}

const handlePrevious = (props) => () => {
    props.setCurrentSelected(0)
    props.setCurrentState(props.currentState - 1)
}

const ContinueButton = (props) => {
    return (
        <>
            {props.currentSelected
                ? (<Button variant="continue" onClick={handleNext(props)}>Weiter</Button>)
                : (<Button variant="continue" disabled>Weiter</Button>)}
        </>
    )
}

const BackButton = (props) => {
    return (
        <button className="btn-back" onClick={handlePrevious(props)}><img src={IconBack} alt='back-icon' /></button>
    )
}

export {ContinueButton, BackButton}