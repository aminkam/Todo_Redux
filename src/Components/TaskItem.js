import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { complete, del, edit } from '../redux/action';


const TaskItem = ({el}) => {
    const [editt, setEditt] = useState(false)
    const [nameTodo, setNameTodo] = useState(el.name)
    const dispatch = useDispatch();
    const editTodo = () => {
        dispatch(edit(el.id, nameTodo));}
    const deletTodo = () => {
        dispatch(del(el.id))}
    
    
    return (
        <div>
            {editt ? (
                <input type="text"  placeholder="Edit todo !!" onChange={(e)=> setNameTodo(e.target.value)} value={nameTodo}/>
            ): (
                <h4 id={el.isDone ? "comp" : null}>{el.name}</h4>
            )}
            <button onClick={()=> {setNameTodo(el.name);
                editTodo();
                setEditt(!editt)}}>{editt? "Update" : "Edit"}</button>

            <button onClick={() => dispatch(complete(el.id))}>
        {el.isDone ? "Undo" : "Complete"}
      </button>
      <button onClick={deletTodo}>Delete</button>
        </div>
    )
}

export default TaskItem;
