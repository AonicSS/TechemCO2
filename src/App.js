import React from "react";
import { useState } from "react"

import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import Stepper from "./components/Stepper/stepper"
import SelectionChoice from "./components/SelectionChoice/selectionChoice"
import FinalPage from "./components/FinalPage/finalPage";
import { ContinueButton, BackButton } from "./components/Button/button"

function App() {
  const [currentState, setCurrentState] = useState(4)
  const [currentSelected, setCurrentSelected] = useState(2)
  const [canContinue, setCanContinue] = useState(false)
  const [Consumption, setConsumption] = useState({'Unit':'kWh', 'Value':'28000'})
  const [TotalArea, setTotalArea] = useState(300)
  const [Email, setEmail] = useState('')

  return (
    <div className="App d-flex flex-column align-items-center container">

      {currentState > 3
        ? ('')
        : (<Stepper currentState={currentState}></Stepper>)}

      {currentState > 0
        ? (<BackButton currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          currentState={currentState}
          setCurrentState={setCurrentState}
          setCanContinue={setCanContinue} />)
        : ''}

      {currentState === 5 ? (<FinalPage />) : ''} 

      <SelectionChoice currentState={currentState}
        setCurrentState={setCurrentState}
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
        Consumption={Consumption}
        setConsumption={setConsumption}
        TotalArea={TotalArea}
        setTotalArea={setTotalArea}
        Email={Email}
        setEmail={setEmail}
        canContinue={canContinue}
        setCanContinue={setCanContinue}
      ></SelectionChoice>

      {currentState === 3 ? ('') : (<ContinueButton currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
        currentState={currentState}
        setCurrentState={setCurrentState}
        canContinue={canContinue}
        setCanContinue={setCanContinue}></ContinueButton>)}

    </div>
  );
}

export default App;
