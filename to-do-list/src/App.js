import "./App.css";

import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddNewTask from "./Components/AddNewTask.js";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <TodoList />
        <AddNewTask />
      </div>
    </div>
  );
}

export default App;
