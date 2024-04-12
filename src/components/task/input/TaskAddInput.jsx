import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const TaskAddInput = ({inputText,
    setInpuText,
    taskList,
    setTaskList}) => {
    const handleSubmit= (e)=>{
        e.preventDefault();
       
        if(inputText==""){
            return;
        }
        const taskID=uuidv4();
        // console.log(e)
        //カードを追加する
        setTaskList([...taskList,{
            id:taskID,
            text:inputText,
            draggableId:`task-${taskID}`
        }])
        setInpuText("");
    }
    const handleChange=(e)=>{
        setInpuText(e.target.value);
        // console.log(e.target.value);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='add a task' 
            className='taskAddInput'
            value={inputText}
            onChange={handleChange}
            />
        </form>
    </div>
  )
}

export default TaskAddInput