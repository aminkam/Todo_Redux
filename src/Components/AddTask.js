import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/action';

const AddTask = ({handleFilter, filter}) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const addd =() => {
        name.trim()===""? alert ('Give us a Name') :dispatch(add({id:Math.random(),name:name, isDone:false}));
        setName("")  
    }
    return (
        <div>
            
      <input type="text" placeholder="pls whrite something" onChange={(e)=> setName(e.target.value)} value={name} />
      <button onClick={addd}>ADD</button>
     
        </div>
    )
}

export default AddTask
