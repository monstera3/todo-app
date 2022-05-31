import { MdAddCircle } from 'react-icons/md';
import {useState} from "react";


export const InputForm = () => {

  
  return(
    <div className="inputForm">
      <form>
        <input className="" type="text"/>
        <button>
          <MdAddCircle size="2rem"/>
        </button>
      </form>
    </div>
  );
}
