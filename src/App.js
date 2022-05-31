import {Title} from './components/Title'
import {InputForm} from './components/InputForm'
import './App.css';
import {TodoList} from "./components/TodoList";
import {useState} from "react";



function App() {

  const [todoText, setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState('');
  const [completeTodos,setCompleteTodos] = useState('');



  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);

  };


  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
  };


  return (
    <div className="App">
      <Title />
      <InputForm todoText={todoText} setTodoText={setTodoText}/>
      <TodoList
        Todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}/>
    </div>
  );
}

export default App;
