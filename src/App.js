import {Title} from './components/Title'
import {InputForm} from './components/InputForm'
import './App.css';
import {TodoList} from "./components/TodoList";
import {useState} from "react";



function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList />
    </div>
  );
}

export default App;
