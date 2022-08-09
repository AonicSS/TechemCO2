import React from "react";
import { useState, useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import Stepper from "./components/Stepper/stepper"
import SelectionChoice from "./components/SelectionChoice/selectionChoice"
import { ContinueButton, BackButton } from "./components/Button/button"

function App() {
  const [currentState, setCurrentState] = useState(0)
  const [currentSelected, setCurrentSelected] = useState(0)

  return (
    <div className="App d-flex flex-column align-items-center">
      <h3>Development Branch</h3>
      <Stepper currentState={currentState}></Stepper>
      {currentState > 0 ? (<BackButton currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
        currentState={currentState}
        setCurrentState={setCurrentState} />) : ''}
      <SelectionChoice currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}></SelectionChoice>
      <ContinueButton currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
        currentState={currentState}
        setCurrentState={setCurrentState}></ContinueButton>
    </div>
  );
}

export default App;
