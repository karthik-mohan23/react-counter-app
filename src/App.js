import { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="center">
        <h1 className="number">{count}</h1>
        <div className="button-box">
          <button className="subtract" onClick={handleSubtract}>
            SUBTRACT
          </button>
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
          <button className="add" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
