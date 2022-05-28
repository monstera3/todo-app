import {Title} from './components/Title'
import {InputForm} from './components/InputForm'
import './App.css';
import {TodoList} from "./components/TodoList";



function App() {
  return (
    <div className="App">
      <Title />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
