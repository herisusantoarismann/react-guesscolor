import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
    document.title = "React - Guess Color";
  }, []);

  return (
    <div className="container">
      <h1 className="title">Guess color by choose options below.</h1>
      <button>Shuffle</button>
      <div className="color"></div>
      <div className="options">
        <button>#1231231</button>
        <button>#1231231</button>
        <button>#1231231</button>
      </div>
      <p className="result">Wrong Answer!</p>
    </div>
  );
}

export default App;
