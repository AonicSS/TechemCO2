import React, { useEffect, useState } from 'react'
import Validator from 'validator'
import { ButtonGroup, Button, Form, Stack, Row, Col } from 'react-bootstrap'
import InfoModal from '../Modal/modal'
import './style.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { ContinueButton } from '../Button/button'

import IconFlussiggas from '../../assets/icons/IconFlussiggas.svg'
import IconErdgas from '../../assets/icons/IconErdgas.svg'
import IconHeizol from '../../assets/icons/IconHeizol.svg'
import IconHouse from '../../assets/icons/IconHouse.svg'
import IconCloud from '../../assets/icons/IconCloud.svg'
import ImageEmail from '../../assets/images/EmailScreen.png'
import IconEmail from '../../assets/images/EmailRedCircle.svg'
import IconHeizungsCheck from '../../assets/icons/IconHeizungsCheck.svg'
import IconHeizungsActive from '../../assets/icons/IconHeizungsActive.svg'


const Selection = (props) => {
    return (
        <div className='choice-item'>
            <img src={props.imageUrl} alt={props.name} />
            <p className='choice-text'>{props.name}</p>
            <input type='radio'
                name='choice-item'
                id={`choice-${props.name}`}
                data-id={props.dataId}
                onChange={props.changeHandler}>
            </input>
        </div>
    )
}

const InitSelection = ({ props }) => {

    const handleRadioChange = () => (event) => {
        const selectedOption = event.target.getAttribute('data-id')
        props.setCurrentSelected(parseInt(selectedOption))
        props.setCanContinue(true)
    }

    return (
        <div className='choice-container mb-5'>
            <Selection name='Flüssiggas'
                dataId='1'
                imageUrl={IconFlussiggas}
                currentSelected={props.currentSelected}
                changeHandler={handleRadioChange(props)} />
            <Selection name='Erdgas'
                dataId='2'
                imageUrl={IconErdgas}
                currentSelected={props.currentSelected}
                changeHandler={handleRadioChange(props)} />
            <Selection name='Heizöl'
                dataId='3'
                imageUrl={IconHeizol}
                currentSelected={props.currentSelected}
                changeHandler={handleRadioChange(props)} />
        </div>
    )
}

const FirstSelection = ({ props }) => {
    const [SelectedUnit, setSelectedUnit] = useState('L')
    const handleInputChange = () => (event) => {
        props.setConsumption({
            'Unit': SelectedUnit,
            'Value': event.target.value
        })

        if (event.target.value.length > 0) {
            props.setCanContinue(true)
        } else {
            props.setCanContinue(false)
        }
    }

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.innerHTML)
    }

    let selectedName, selectedIcon
    let addPadding = false
    if (props.currentSelected === 1 && props.currentState === 1) {
        selectedName = 'Flüssiggas'
        selectedIcon = IconFlussiggas
    } else if (props.currentSelected === 2 && props.currentState === 1) {
        selectedName = 'Erdgas'
        selectedIcon = IconErdgas
        addPadding = true
        useEffect(() => {
            setSelectedUnit('kWh')
        }, [])
    } else if (props.currentSelected === 3 && props.currentState === 1) {
        selectedName = 'Heizöl'
        selectedIcon = IconHeizol
    }

    return (
        <div className='d-flex align-items-center mb-5'>
            <Stack direction='horizontal' gap={3}>
                <div className='choice-item'>
                    <img src={selectedIcon} alt='item-icon' />
                    <p className='choice-text'>{selectedName}</p>
                </div>
                <Form>
                    <Form.Group className='d-flex align-items-center' controlId="formInput">
                        <Form.Control type="number" placeholder="Wert eintragen" className={`pt-2 ${addPadding ? 'pe-5' : 'pe-4'}`} onChange={handleInputChange(props)} />
                        {selectedName !== 'Erdgas'
                            ? (<span className='unit'>L</span>)
                            : (<ButtonGroup className='unit'>
                                <Button variant='unit' className={SelectedUnit === 'kWh' ? 'active-unit' : ''} onClick={handleUnitChange}>kwh</Button>
                                <Button variant='unit' className={SelectedUnit === 'm3' ? 'active-unit' : ''} onClick={handleUnitChange}>m3</Button>
                            </ButtonGroup>)}
                    </Form.Group>
                </Form>
            </Stack>
        </div>
    )

}

const SecondSelection = ({ props }) => {
    const handleInputChange = () => (event) => {
        props.setTotalArea(event.target.value)
        if (event.target.value.length > 0) {
            props.setCanContinue(true)
        } else {
            props.setCanContinue(false)
        }
    }
    return (
        <div className='d-flex align-items-center mb-5'>
            <Stack direction='horizontal' gap={3}>
                <div className='choice-item'>
                    <img src={IconHouse} alt='item-icon' />
                    <p className='choice-text'>Wohnfläche</p>
                </div>
                <Form>
                    <Form.Group className='d-flex align-items-center' controlId="formInput">
                        <Form.Control type="number" placeholder="Wert eintragen" className={`pt-2 pe-4'}`} onChange={handleInputChange(props)} />
                        <span className='unit'>m2</span>
                    </Form.Group>
                </Form>
            </Stack>
        </div>
    )
}

const ThirdSelection = ({ props }) => {
    const [ValidEmail, setValidEmail] = useState(false)
    const [Consent, setConsent] = useState(false)

    const handleEmailChange = (event) => {
        if (Validator.isEmail(event.target.value)) {
            props.setEmail(event.target.value)
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }

    }

    const handleConsentChange = (event) => {
        if (event.target.checked) {
            setConsent(true)
        } else {
            setConsent(false)
        }
    }

    useEffect(() => {
        if (ValidEmail && Consent) {
            props.setCanContinue(true)
        } else {
            props.setCanContinue(false)
        }
    }, [ValidEmail, Consent])

    const consentText = `Mit dem Absenden dieses Formulars willige ich ein, 
    dass die Techem GmbH, sowie deren Tochtergesellschaften und die mit ihr verbundenen Gesellschaften, 
    die von mir oben eingetragenen Daten zum Zweck der Bearbeitung dieser Anfrage,
     der werblichen Ansprache per E-Mail und der Auswertung zu Marketingzwecken verarbeitet werden.
      Ich bestätige weiter, dass ich zur Überlassung vorgenannter Kontaktdaten berechtigt bin. 
      Diese Einwilligung erfolgt freiwillig und ist mit Wirkung für die Zukunft jederzeit widerrufbar.
       Einzelheiten zum Datenschutz bei der Techem GmbH entnehmen Sie bitte den Datenschutzbestimmungen.`


    return (
        <Row className='d-flex justify-content-between'>
            <Col md={6}>
                <h3 className='stepper-text text-center'>
                    Ihre kostenlose CO2-Kostenprognose <br /> ist nur einen Klick entfernt
                </h3>
                <p>
                    Geben Sie einfach Ihre E-Mail-Adresse an und erhalten
                    Sie von uns gebührenfrei Ihre individuelle Prognose sowie wertvolle Energiespartipps!
                </p>
                <Form>
                    <Form.Group controlId="formInput" className='mb-4 col-md-8 d-flex flex-column ms-auto me-auto'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="E-Mail eintragen" onChange={handleEmailChange} className='mb-5' />
                        <ContinueButton currentSelected={props.currentSelected}
                            setCurrentSelected={props.setCurrentSelected}
                            currentState={props.currentState}
                            setCurrentState={props.setCurrentState}
                            canContinue={props.canContinue}
                            setCanContinue={props.setCanContinue}></ContinueButton>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={consentText} onChange={handleConsentChange} className='consent-text' />
                    </Form.Group>
                </Form>
            </Col>
            <Col md={6}>
                <div className='email-img-content'>
                    <img className='icon-email' src={IconEmail} alt='email-icon'></img>
                    <img className='image-email' src={ImageEmail} alt='email-img'></img>
                </div>
            </Col>
        </Row>
    )
}

const FourthSelection = ({ props }) => {
    const [showDiscount, setShowDiscount] = useState(false)

    useEffect(() => {
        props.setCanContinue(true)
    }, [])

    const InitialPricePerTon = 35
    const ComputationData = {
        'Erdgas': [{
            'Unit': 'kWh',
            'EmissionFactor': 241.1,
            'Heizwert': 1.0,
            'Brennwert': 1.11
        },
        {
            'Unit': 'm3',
            'EmissionFactor': 241.1,
            'Heizwert': 10.0,
            'Brennwert': 1.0
        }],
        'Flüssiggas': {
            'Unit': 'L',
            'EmissionFactor': 241.1,
            'Heizwert': 6.57,
            'Brennwert': 1.0
        },
        'Heizöl': {
            'Unit': 'L',
            'EmissionFactor': 312.7,
            'Heizwert': 10.0,
            'Brennwert': 1.0
        }
    }

    let selectedName, selectedIcon
    if (props.currentSelected === 1) {
        selectedName = 'Flüssiggas'
        selectedIcon = IconFlussiggas
    } else if (props.currentSelected === 2) {
        selectedName = 'Erdgas'
        selectedIcon = IconErdgas
    } else if (props.currentSelected === 3) {
        selectedName = 'Heizöl'
        selectedIcon = IconHeizol
    }

    const TotalEmission = () => {
        switch (selectedName) {
            case 'Erdgas':
                return CalculateTotalEmission(ComputationData.Erdgas.filter(item => item.Unit === props.Consumption.Unit)[0])
            case 'Flüssiggas':
                return CalculateTotalEmission(ComputationData.Flüssiggas)
            case 'Heizöl':
                return CalculateTotalEmission(ComputationData.Heizöl)
            default:
                return
        }
    }

    const CalculateTotalEmission = (selectedData) => {
        return ((((parseInt(props.Consumption.Value)
            * selectedData.Heizwert) / selectedData.Brennwert)
            * selectedData.EmissionFactor) / 1000)
    }

    const CalculateShare = () => {
        const perMeterEmission = TotalEmission() / props.TotalArea
        switch (true) {
            case (perMeterEmission < 12):
                return 0
            case (12 < perMeterEmission && perMeterEmission < 17):
                return 10
            case (17 < perMeterEmission && perMeterEmission < 22):
                return 20
            case (22 < perMeterEmission && perMeterEmission < 27):
                return 30
            case (27 < perMeterEmission && perMeterEmission < 32):
                return 40
            case 32 < perMeterEmission && perMeterEmission < 37:
                return 50
            case 37 < perMeterEmission && perMeterEmission < 42:
                return 60
            case 42 < perMeterEmission && perMeterEmission < 47:
                return 70
            case 47 < perMeterEmission && perMeterEmission < 52:
                return 80
            case perMeterEmission >= 52:
                return 90
            default:
                return 0
        }
    }

    const showDiscountChart = () => {
        setShowDiscount(!showDiscount)
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        ChartDataLabels
    )

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'CO2 Chart',
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                stacked: false,
                grid: {
                    display: false
                }
            },
        }
    }

    const labels = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032']

    let dataFillMietende = labels.map((item, index) => {
        if (index === 0) {
            return parseFloat(TotalEmission() / 1000 * InitialPricePerTon).toFixed(2)
        } else if (index === 1) {
            return parseFloat(TotalEmission() / 1000 * (InitialPricePerTon + 10)).toFixed(2)
        } else {
            return parseFloat(TotalEmission() / 1000 * (InitialPricePerTon + 20)).toFixed(2)
        }
    })

    let dataFillVermietende = dataFillMietende.map((item) => parseFloat(item - (item * (CalculateShare() / 100))).toFixed(2))
    let dataDiscount = dataFillVermietende.map((item) => parseFloat(item - (item * 0.1)).toFixed(2))

    const CalculateYearlyCost = (data) => {
        const sum = data.reduce((partial, current) =>  {
            return parseFloat(partial) + parseFloat(current)
        }, [0])
        return sum
    }

    let dataset

    if (props.currentState === 5 && showDiscount) {
        dataset = [
            {
                label: 'Discount',
                data: dataDiscount,
                backgroundColor: 'rgba(226, 6, 19, 1)',
                datalabels: {
                    color: 'white',
                    anchor: 'end',
                    align: 'bottom',
                    font: {
                        family: 'Univers B'
                    },
                    formatter: (value) => { return value + ' €' }
                }
            },
            {
                label: 'Vermietende',
                data: dataFillVermietende,
                backgroundColor: 'rgba(0, 155, 180, 1)',
                datalabels: {
                    color: 'black',
                    anchor: 'end',
                    align: 'bottom',
                    font: {
                        family: 'Univers B'
                    },
                    formatter: (value) => { return value + ' €' }
                }
            },
            {
                label: 'Mietende',
                data: dataFillMietende,
                backgroundColor: 'rgba(0, 155, 180, 0.15)',
                datalabels: {
                    color: 'black',
                    anchor: 'end',
                    align: 'bottom',
                    font: {
                        family: 'Univers B'
                    },
                    formatter: (value) => { return value + ' €' }
                }
            },
        ]
    } else {
        dataset = [
            {
                label: 'Vermietende',
                data: dataFillVermietende,
                backgroundColor: 'rgba(0, 155, 180, 1)',
                datalabels: {
                    color: 'black',
                    anchor: 'end',
                    align: 'bottom',
                    font: {
                        family: 'Univers B'
                    },
                    formatter: (value) => { return value + ' €' }
                }
            },
            {
                label: 'Mietende',
                data: dataFillMietende,
                backgroundColor: 'rgba(0, 155, 180, 0.15)',
                datalabels: {
                    color: 'black',
                    anchor: 'end',
                    align: 'bottom',
                    font: {
                        family: 'Univers B'
                    },
                    formatter: (value) => { return value + ' €' }
                }
            },
        ]
    }

    const chartData = {
        labels,
        datasets: dataset,
    };

    return (
        <div className='report-section'>
            {props.currentState === 5
                ? (<Row className='mb-5 align-items-center'>
                    <Col md={10}>
                        <Stack direction='horizontal' gap={3} className='justify-content-start'>
                            <div>
                                10 Jahre <InfoModal currentState={props.currentState} InfoToShow={4}></InfoModal> <br />
                                Gesamtkosten
                            </div>
                            <div className={showDiscount ? 'cross-text' : ''}>{CalculateYearlyCost(dataFillMietende)} €
                            </div>
                            {showDiscount
                                ? (<div className='discount-text'>{CalculateYearlyCost(dataFillMietende) - (CalculateYearlyCost(dataFillMietende) * 0.1)} €</div>)
                                : ('')}
                        </Stack>
                    </Col>
                    <Col md={2}>
                        <Stack>
                            <img className='icon-heizung' src={showDiscount ? IconHeizungsActive : IconHeizungsCheck} alt='IconHeizungCheck' onClick={showDiscountChart} />
                            <p>HeizungsCheck</p>
                        </Stack>
                    </Col>
                </Row>)
                : (<Row className='mb-5'>
                    <Stack direction="horizontal" gap={3}>
                        <Stack direction="horizontal" gap={3}>
                            <Stack direction="horizontal" gap={3}>
                                <div className='choice-item'>
                                    <img src={selectedIcon} alt='item-icon' />
                                    <p className='choice-text'>{selectedName}</p>
                                </div>
                                <div>{props.Consumption.Value} {props.Consumption.Unit}</div>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <div>
                                    <img src={IconHouse} alt='house-icon' />
                                    <p className='choice-text'>Wohnfläche</p>
                                </div>
                                <div>{props.TotalArea} m2</div>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                <img src={IconCloud} alt='house-icon' />
                                <p className='choice-text'>CO<sup>2</sup> Emission</p>
                            </div>
                            <div>{parseFloat(TotalEmission() / 1000).toFixed(2)} t
                                <InfoModal currentState={props.currentState} InfoToShow={3}></InfoModal></div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                10 Jahre <InfoModal currentState={props.currentState} InfoToShow={4}></InfoModal> <br />
                                Gesamtkosten
                            </div>
                            <div>{CalculateYearlyCost(dataFillMietende)} €
                            </div>
                        </Stack>
                    </Stack>
                </Row>)}

            <Row className='mb-5'>
                <Stack direction="horizontal" gap={3} className='d-flex align-items-center'>
                    <div><span className='stepper-text'>Techem CO<sub>2</sub>-Kostenprognose:</span> Ihr Anteil beträgt {CalculateShare()}%</div>
                    <Stack gap={2} className='align-items-end'>
                        <div className='d-flex align-items-center'>{100 - CalculateShare()}% Anteil and der CO<sub>2</sub>-Angabe<span className='dot tenant-dot ms-2 me-2'></span>Mietende</div>
                        <div className='d-flex align-items-center'>{CalculateShare()}% Anteil and der CO<sub>2</sub>-Angabe<span className='dot landlord-dot ms-2 me-2'></span>Vermietende</div>
                    </Stack>
                </Stack>
                <Bar options={chartOptions} data={chartData} />
            </Row>
            {props.currentState === 5
                ? ('')
                : (<Row className='text-center mb-5'>
                    <h3 className='stepper-text'>Ihr CO<sup>2</sup>-Kostenanteil beträgt {CalculateShare()}%</h3>
                    <div>
                        Dieser Wert ergibt sich aus der Energiebilanz Ihres Gebäudes.
                        Je besser diese ist, desto niedriger ist Ihr voraussichtlicher Anteil an den CO2-Kosten als Vermieter.
                        Eine Verabschiedung des Gesetzes steht allerdings noch aus, weshalb es sich um eine unverbindliche Prognose handelt.
                        <br />
                        Sie möchten die Energiebilanz Ihrer Immobilie verbessern? Dabei helfen wir Ihnen gerne mit unseren innovativen Lösungen!
                    </div>
                </Row>)}

        </div>
    )
}

const FifthSelection = ({ props }) => {
    return (
        <div>
            <FourthSelection props={props} />
        </div>
    )
}


const SelectionChoice = (props) => {
    switch (props.currentState) {
        case 1:
            return <FirstSelection props={props} />
        case 2:
            return <SecondSelection props={props} />
        case 3:
            return <ThirdSelection props={props} />
        case 4:
            return <FourthSelection props={props} />
        case 5:
            return <FifthSelection props={props} />
        default:
            return <InitSelection props={props} />
    }
}

export default SelectionChoice