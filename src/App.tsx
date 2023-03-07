import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
interface CountdownModel {
  initialCount:number,
  onCountdownEnd:Function
}

function Countdown({ initialCount = 10, onCountdownEnd }:CountdownModel) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === 0) {
      onCountdownEnd();
      return;
    }

    const timerId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [count]);
   
  return (
    <div>
      <p>Countdown: {count}</p>
      <button  onClick={() => setCount(initialCount)}>reset</button>
    </div>
  );
}

function App() {
  const handleCountdownEnd = () => {
    console.log("Countdown ended");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Countdown initialCount={20} onCountdownEnd={handleCountdownEnd} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
