import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const ExponentTwo = ({ count }) => (
    <div>
      2^({count}) = {Math.pow(2, count)}
    </div>
  );
  const ExponentThree = ({ count }) => (
    <div>
      3^({count}) = {Math.pow(3, count)}
    </div>
  );
  const ExponentFour = ({ count }) => (
    <div>
      4^({count}) = {Math.pow(4, count)}
    </div>
  );
  const ExponentFive = ({ count }) => (
    <div>
      5^({count}) = {Math.pow(5, count)}
    </div>
  );
  const ExponentSix = ({ count }) => (
    <div>
      6^({count}) = {Math.pow(6, count)}
    </div>
  );

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <br />
      <h2>
        <em>Exponents</em>
      </h2>
      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
}

export default App;
