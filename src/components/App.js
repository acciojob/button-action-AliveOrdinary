import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {


  const handleClick= ()=>{
    const [isClicked, setIsClicked] = useState(false);
  }
  return (
    <div className="App" id="main">
      // Do not alter the main div
      {isClicked && (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}
      
      <button id="click" onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
