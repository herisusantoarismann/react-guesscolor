import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [colors, setColors] = React.useState<Array<string>>([]);
  const [correct, setCorrect] = React.useState<number>(0);
  const [result, setResult] = React.useState<boolean | null>(null);

  const randomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const generateColor = () => {
    setColors([]);
    const answer = Math.floor(Math.random() * 3);
    setCorrect(answer);
    for (let i = 0; i < 3; i++) {
      setColors((prevState) => [...prevState, randomColor()]);
    }
  };

  const onGuess = (guess: string) => {
    if (guess === colors[correct]) setResult(true);
    else setResult(false);
    generateColor();
  };

  const onShuffle = () => {
    generateColor();
  };

  React.useEffect(() => {
    document.title = "React - Guess Color";
    generateColor();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Guess color by choose options below.</h1>
      <Button text="Shuffle" onClick={() => onShuffle()} />
      <div
        className="color"
        style={{ backgroundColor: `#${colors[correct]}` }}
      ></div>
      <div className="options">
        {colors.map((color: string, i: number) => {
          return (
            <Button text={`#${color}`} onClick={() => onGuess(color)} key={i} />
          );
        })}
      </div>
      {result !== null && (
        <p className={`result ${result ? "correct" : "wrong"}`}>
          {result ? "Correct Answer!" : "Wrong Answer!"}
        </p>
      )}
    </div>
  );
}

export default App;
