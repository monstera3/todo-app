import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
  //  タスクの削除
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return(
    <div className="todoList">
      <div className="todos">
        {taskList.map((task , index )=>(
          <div className="todo" key={index}>
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button className="icons">
                <AiOutlineCheck className="fa-check" size="2.5rem"/>
              </button>
              <button className="icons" onClick={handleDelete}>
                <AiOutlineDelete className="fa-trash" size="2.5rem"/>
              </button>
            </div>
          </div>
        ))}

      </div>
      </div>
  );
}
