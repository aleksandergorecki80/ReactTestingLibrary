import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addSpacesBeforeCapitalLetters } from './utils/functions';

function App() {

  const [color, setColor] = useState("MediumVioletRed");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const newColor = color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          disabled={isButtonDisabled}
          onClick={() => setColor(newColor)}
          style={{
            backgroundColor: isButtonDisabled ? "gray" : color,
            width: "500px",
            height: "100px",
            color: "pink",
            fontSize: "20px",
            fontWeight: "bolder",
            cursor: "zoom-out"
          }}
        >Change to {addSpacesBeforeCapitalLetters(newColor)}</button>
        <input
          onChange={(e) => setIsButtonDisabled(e.target.checked)}
          type="checkbox" 
          id="vehicle3" 
          value="Boat" />
        <label htmlFor="vehicle3">I have a boat</label>
      </header>
    </div>
  );
}

export default App;
