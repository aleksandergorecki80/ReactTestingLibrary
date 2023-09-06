import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [color, setColor] = useState("red");
  const [chengTo, setChangeTo] = useState<string>("blue");

  const handleOnClick = ()  =>{
    setColor(chengTo);
    setChangeTo(color);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={handleOnClick}
          style={{
            backgroundColor: color,
            width: "500px",
            height: "100px",
            color: "pink",
            fontSize: "20px",
            fontWeight: "bolder",
            cursor: "zoom-out"
          }}
        >Change to {chengTo}</button>
      </header>
    </div>
  );
}

export default App;
