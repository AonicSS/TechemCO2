import React from 'react'
import './style.css'

import IconFlussiggas from '../../assets/icons/IconFlussiggas.svg'
import IconErdgas from '../../assets/icons/IconErdgas.svg'
import IconHeizol from '../../assets/icons/IconHeizol.svg'


const SelectionChoice = (props) => {
    return (
        <div className='choice-container mb-5'>
            <div className='choice-item'>
                <img src={IconFlussiggas} alt='icon' />
                <p className='choice-text'>Flussiggas</p>
                <input type='radio' name='choice-item' id={`choice-Flussiggas`} onChange={() => props.setCurrentSelected(1)}></input>
            </div>
            <div className='choice-item'>
                <img src={IconErdgas} alt='icon' />
                <p className='choice-text'>Erdgas</p>
                <input type='radio' name='choice-item' id={`choice-Erdgas`} onChange={() => props.setCurrentSelected(2)}></input>
            </div>
            <div className='choice-item'>
                <img src={IconHeizol} alt='icon' />
                <p className='choice-text'>Heizol</p>
                <input type='radio' name='choice-item' id={`choice-Heizol`} onChange={() => props.setCurrentSelected(3)}></input>
            </div>
        </div>
    )
}

export default SelectionChoice