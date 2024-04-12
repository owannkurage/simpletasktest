import React from 'react'

const TaskCardDeleteButton = ({taskCardsList,taskCard,setTaskCardsList}) => {
  const taskCardDeleteButton=(id)=>{
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e)=>e.id!=id))
    
  }
  return (
    <div>
        <button 
        className='taskCardDeleteButton'
        onClick={()=>taskCardDeleteButton(taskCard.id)}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
  )
}

export default TaskCardDeleteButton