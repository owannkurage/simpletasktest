import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddTaskCardButton = ({taskCardsList,setTaskCardsList}) => {
  const addTaskCard=()=>{
    const taskID=uuidv4();
    setTaskCardsList([...taskCardsList,{
      id:taskID,
      draggableId:`task${taskID}`
    }])

  }
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton