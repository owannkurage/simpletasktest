import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'
import { Draggable } from 'react-beautiful-dnd'


const TaskCard = ({taskCardsList,taskCard,setTaskCardsList,index}) => {
  const [inputText,setInpuText]=useState("");
  const [taskList,setTaskList]=useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided)=>(
        <div className='taskCard' 
        ref={provided.innerRef}
        {...provided.draggableProps}
        >
        <div className='taskCard_ttl_flex'
          {...provided.dragHandleProps}
        >
          <TaskCardTitle />
          <TaskCardDeleteButton 
            taskCardsList={taskCardsList}
            taskCard={taskCard}
            setTaskCardsList={setTaskCardsList}
            />
        </div>
        <TaskAddInput 
        inputText={inputText} 
        setInpuText={setInpuText}
        taskList={taskList}
        setTaskList={setTaskList}
        />
        <Tasks 
         taskList={taskList}
         setTaskList={setTaskList}
        />
      </div>

      )}
    
    </Draggable>
  )
}

export default TaskCard