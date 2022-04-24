import logo from "./logo.svg";
// import "./App.css";
import Functional from "./Components/Functional";
import Class from "./Components/Class";
import "../src/Components/Style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Functional />
        <Class />
      </header>
    </div>
  );
}

export default App;
