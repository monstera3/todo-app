import { MdAddCircle } from 'react-icons/md';


export const InputForm = () => {

  
  return(
    <div className="inputForm">
      <form>
        <input className="" type="text" autoFocus={true}/>
        <button>
          <MdAddCircle size="2rem"/>
        </button>
      </form>
    </div>
  );
}
