import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import './style.css'

import InfoIcon from '../../assets/icons/InfoIcon.svg'
import InfoHover from '../../assets/icons/InfoHover.svg'

const InfoModal = (props) => {
    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const modalHeadlineText = ['Mit welcher Energiequelle wird geheizt?',
        'Mit welcher Energiequelle wird geheizt?',
        'Wie groß ist die Wohnfläche Ihrer Immobilie?']

    const modalBodyText = ['Mit dieser Angabe können wir Ihnen im nächsten Schritt die richtige Einheit zur Berechnung anbieten.',
        'Den jährlichen Brennstoffverbrauch können Sie der Jahresrechnung Ihres Energieversorgungsunternehmens entnehmen.',
        'Die CO2-Abgabe ist für alle Wohngebäude einschließlich Wohn-, Alten- und Pflegeheime sowie Gebäude mit gemischter Nutzung vorgesehen. Die Wohnfläche ist die Summe der Grundflächen aller Wohnflächen.']

    const selectedHeaderText = modalHeadlineText[props.currentState]
    const selectedBodyText = modalBodyText[props.currentState]

    return (
        <>
            <img className='modal-popup'
                src={hover ? InfoHover : InfoIcon}
                alt='info icon'
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleShow} />

            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <img className='modal-info-icon' src={InfoIcon} alt='info-icon' /> <Modal.Title>{selectedHeaderText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedBodyText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="continue" onClick={handleClose}>
                        Schließen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal