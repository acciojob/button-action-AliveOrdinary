import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [showPara, setShowPara] = useState(false);

  return (
    <div className="App" id="main">
      <button id="click" onClick={() => setShowPara(!showPara)}>
        Show Paragraph
      </button>
      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
};

export default App;
