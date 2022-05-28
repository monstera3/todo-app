import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

export const TodoList = () => {
  return(
    <div className="todoList">
      <div className="todos">
        <div className="todo">
          <div className="todoText">
            <span>プログラミング</span>
          </div>
          <div className="icons">
            <button className="icons">
              <AiOutlineCheck className="fa-check" size="2.5rem"/>
            </button>
            <button className="icons" >
              <AiOutlineDelete className="fa-trash" size="2.5rem"/>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
