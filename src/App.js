import { useState } from 'react';
import './App.css';
import { modThree } from './util/FSM';
function App() {
  const [output, setOutput] = useState({ state: "", value: "" });
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = (event) => {
    if (/[^01]/.test(event.target.value)) //Validating if input text has non binary characters
      setErrorMessage("Wrong input entered");
    else {
      setErrorMessage("");
      setInputText(event.target.value);  // Input value is updated in the textbox
      setOutput(modThree(event.target.value));  // Call and set final state
    }
  }
  
  return (
    <div className="App">
      <h1>FSM</h1>
      <input type="text" placeholder="Enter binary number" aria-label="binary-input" value={inputText}
        onChange={(event) => onInputChange(event)} />
      {errorMessage ? <p>{errorMessage}</p> : <p>Output for state: {output.state} = {output.value}</p>}
    </div>
  );
}

export default App;
