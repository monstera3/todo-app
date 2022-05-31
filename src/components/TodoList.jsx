import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

export const TodoList = (props) => {

  const {Todos,onClickComplete,onClickDelete} = props;


  return(
    <div className="todoList">

      <ul>
        {Todos.map((props,index) =>{
          return(
            <div key={props} className="list-row">
              <li>{props}</li>
              <button onClick={()=> onClickComplete(index)}>完了<AiOutlineCheck size="1.2rem"/></button>
              {/*  何行目が押されたか認識するためにindexを追加*/}
              <button onClick={()=> onClickDelete(index)} >削除<AiOutlineDelete size="1.2rem"/></button>
            </div>
          );
        })}
      </ul>

      <div className="todos">
          <div className="todo" >
            <div className="todoText">
              <span>a</span>
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
