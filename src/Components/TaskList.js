import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import TaskItem from './TaskItem';

const TaskList = () => {
    const todos = useSelector(state => state.tasks);
    const [filter, setFilter] = useState(false);
    const handleFilter = () => setFilter(!false);


    return (
        <div>
            <AddTask  handleFilter={handleFilter} filter={filter}/>
            {/* {filter
            ? todos.filter((el)=> el.isDone).map((el) => <TaskItem el={el} key={el.id} />)
        :todos.map((el)=> <TaskItem el={el} key={el.id}/>)} */}
        {todos.map((el,i)=> <TaskItem  el={el} key={i}/>)}

        </div>
    )
}

export default TaskList
