import { FaGithub } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';


export const InputForm = () => {

  const handleSubmit = (e) => {
    console.log("a");
    e.preventDefault();
  }

  return(
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input className="" type="text"/>
        <button>
          <MdAddCircle size="2rem"/>
        </button>
      </form>
    </div>
  );
}
