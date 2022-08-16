import React from 'react'
import ImageFinalOne from '../../assets/images/ImageFinalOne.png'
import ImageFinalTwo from '../../assets/images/ImageFinalTwo.png'
import ImageFinalThree from '../../assets/images/ImageFinalThree.png'
import ImageFinalFour from '../../assets/images/ImageFinalFour.png'
import IconArrow from '../../assets/icons/IconArrow.svg'
import { Button, Stack, Row } from 'react-bootstrap'

import './style.css'

const FinalPage = () => {
    return (
        <div>
            <Row className='final-headline mb-5'>
                <img src={ImageFinalOne} alt='ImageFinalOne' />
                <h3 className='stepper-text'>Steigern Sie durch Energieeffizienz <br /> den Wert Ihrer Immobilie</h3>
                <Button className='col-md-3' variant="continue" href='#anchor'>Direkt zum HeizungsCheck</Button>
            </Row>
            <Row className='mb-5'>
                <h4 className='stepper-text'>Energie sparen mit Techem</h4>
                <p>Kosten kennen. Klug planen. Mit Weitblick investieren. Mit Techem erhalten Sie nicht nur eine Einschätzung über die voraussichtlichen CO2-Kosten,
                    die Sie erwarten. Wir unterstützen Sie zudem gerne mit smarten Lösungen beim Energiesparen.
                    Verschaffen Sie sich hier einen einfachen Überblick über unser Angebot plus voraussichtlicher Einsparpotentiale!</p>
            </Row>
            <Row className='mb-5'>
                <Stack direction='horizontal' gap={3}>
                    <div>
                        <img src={ImageFinalTwo} alt='ImageFinalTwo' />
                    </div>
                    <Stack className='justify-content-between'>
                        <h4 className='stepper-text'>
                            Unkompliziert Abgaben reduzieren mit unseren Energiespartipps
                        </h4>
                        <p>
                            Damit Ihre Mieter ihren Verbrauch noch einfacher reduzieren können, haben wir sieben einfache Tipps zum Thema „Clever heizen“ zusammengestellt.
                            Hier erfahren Sie, was die optimale Raumtemperatur ist, wie man richtig lüftet und wie sich bis zu 50 kg CO2 im Jahr - quasi im Schlaf - sparen lassen!
                        </p>
                        <Button variant='continue' className='col-md-4'>Gleich reinlesen</Button>
                    </Stack>
                </Stack>
            </Row>
            <Row className='mb-5'>
                <Stack direction='horizontal' gap={3}>
                    <Stack className='justify-content-between'>
                        <h4 className='stepper-text'>
                            Unterjährige Verbrauchsinfo
                        </h4>
                        <p>
                            Durch mehr Transparenz mit der EED-Verbrauchsinfo von Techem können Mieter sowie Eigentümer ihren Verbrauch effizient senken - und damit auch die Kosten!
                            Denn: Nur wer seinen Verbrauch kennt, kann gezielt Energie sparen.
                            Aktivieren Sie noch heute die EED-Verbrauchsinfo!
                        </p>
                        <Button variant='continue' className='col-md-4'>Mehr erfahren</Button>
                    </Stack>
                    <div>
                        <img src={ImageFinalThree} alt='ImageFinalTwo' />
                    </div>
                </Stack>
            </Row>
            <Row className='grey-box justify-content-center mb-5' id='anchor'>
                <img className='p-0' src={ImageFinalFour} alt='ImageFinalFour' />
                <div className='red-circle' onClick={() => console.log('clicked')}>
                    <p className='mt-4'>Klicken und <br />sparen</p>
                </div>
                <h4 className='stepper-text ps-5 mt-5'>HeizungsCheck</h4>
                <p className='p-5 pt-0'>
                    Damit eine Heizungsanlage effizient läuft, müssen ihre Komponenten richtig eingestellt und auf den Energiebedarf des Hauses abgestimmt sein.
                    Darum kümmern wir uns gerne: Unsere Energieeffizienzprofis bewerten den energetischen Zustand Ihrer Heizungsanlage sowie des Heizmediums und stellen fest, ob sie noch wirtschaftlich arbeitet.
                    So erfassen wir die Energieeffizienz Ihrer Anlage und leiten Maßnahmen zur nachhaltigen Verbesserung der Energiebilanz ab. Die Ergebnisse und daraus resultierende Optimierungsvorschläge stellen wir für Sie in einem abschließenden Inspektionsbericht anschaulich dar, sodass Sie gut informierte Investitionsentscheidungen treffen können.
                </p>
                <img className='icon-arrow' src={IconArrow} alt='IconArrow' />
            </Row>
        </div>
    )
}

export default FinalPage