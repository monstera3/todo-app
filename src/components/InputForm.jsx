import { FaGithub } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';


export const InputForm = () => {
  return(
    <div className="inputForm">
      <form>
        <input type="text"/>
        <button>
          <MdAddCircle size="2rem"/>
        </button>
      </form>
    </div>
  );
}
