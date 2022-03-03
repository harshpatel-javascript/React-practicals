import "./App.css";
import Button from "./Components/Button";
import HeaderDate from "./Components/HeaderDate";
import Lists from "./Components/Lists";

function App() {
  return (
    <div className="App">
      <div className="main">
        <HeaderDate />
        <Lists />
        <Button />
      </div>
    </div>
  );
}

export default App;
