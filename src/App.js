import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="center">
        <h1 className="number">0</h1>
        <div className="button-box">
          <button className="subtract">SUBTRACT</button>
          <button className="reset">RESET</button>
          <button className="add">ADD</button>
        </div>
      </div>
    </div>
  );
};
export default App;
