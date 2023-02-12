import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {


  const renderPara= ()=>{
    document.getElementById("para").style.display = "block";
  }
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={renderPara}>Click me</button>
    </div>
  );
}

export default App;
