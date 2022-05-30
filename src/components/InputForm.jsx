import { MdAddCircle } from 'react-icons/md';
import {useState} from "react";


export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  //  タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText
      }
    ]);
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  
  return(
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input className="" type="text" onChange={handleChange} value={inputText}/>
        <button>
          <MdAddCircle size="2rem"/>
        </button>
      </form>
    </div>
  );
}
