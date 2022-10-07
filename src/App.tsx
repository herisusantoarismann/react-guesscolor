import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [colors, setColors] = React.useState<Array<string>>([]);
  const [correct, setCorrect] = React.useState<string>("");
  const [result, setResult] = React.useState<string>("");

  const randomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const generateColor = () => {
    for (let i = 0; i < 3; i++) {
      console.log(randomColor());
      setColors((prevState) => [...prevState, randomColor()]);
    }
    const answer = Math.floor(Math.random() * 2) + 1;
    setCorrect(colors[answer]);
  };

  React.useEffect(() => {
    document.title = "React - Guess Color";
    generateColor();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Guess color by choose options below.</h1>
      <Button text="Shuffle" />
      <div className="color" style={{ backgroundColor: `#${correct}` }}></div>
      <div className="options">
        {colors.map((color: string, i: number) => {
          return <Button text={color} key={i} />;
        })}
      </div>
      <p className="result">Wrong Answer!</p>
    </div>
  );
}

export default App;
