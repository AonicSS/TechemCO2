import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
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

    console.log(props)
    const modalHeadlineText = ['Mit welcher Energiequelle wird geheizt?',
        'Mit welcher Energiequelle wird geheizt?',
        'Wie groß ist die Wohnfläche Ihrer Immobilie?',
        '',
        '']

    const modalBodyText = ['Mit dieser Angabe können wir Ihnen im nächsten Schritt die richtige Einheit zur Berechnung anbieten.',
        'Den jährlichen Brennstoffverbrauch können Sie der Jahresrechnung Ihres Energieversorgungsunternehmens entnehmen.',
        'Die CO2-Abgabe ist für alle Wohngebäude einschließlich Wohn-, Alten- und Pflegeheime sowie Gebäude mit gemischter Nutzung vorgesehen. Die Wohnfläche ist die Summe der Grundflächen aller Wohnflächen.',
        'Die voraussichtliche CO2-Emission Ihres Gebäudes ist gemäß Ihrer Angabe des aktuellen Energieverbrauchs für einen Zeithorizont von 10 Jahren berechnet.',
        'Damit Sie umfassend planen können, berechnen wir für Sie die voraussichtliche CO2-Abgabe mit einem Zeithorizont von 10 Jahren. Die Summe beinhaltet sowohl die Kosten, die Vermieter als auch Mieter tragen müssen.']

    const selectedHeaderText = props.InfoToShow ? modalHeadlineText[props.InfoToShow] : modalHeadlineText[props.currentState]
    const selectedBodyText = props.InfoToShow ? modalBodyText[props.InfoToShow] : modalBodyText[props.currentState]

    console.log(selectedBodyText)

    return (
        <>
            <img className='modal-popup'
                src={hover ? InfoHover : InfoIcon}
                alt='info icon'
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleShow} />

            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Row>
                    <Col md={1} className='pt-4 ps-4'>
                        <img className='modal-info-icon' src={InfoIcon} alt='info-icon' />
                    </Col>
                    <Col md={11}>
                        <Modal.Header closeButton>
                            {selectedHeaderText ? (<Modal.Title>{selectedHeaderText}</Modal.Title>) : ''}
                        </Modal.Header>
                        <Modal.Body>{selectedBodyText}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="continue" onClick={handleClose}>
                                Schließen
                            </Button>
                        </Modal.Footer>
                    </Col>

                </Row>
            </Modal>
        </>
    );
}

export default InfoModal