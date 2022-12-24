import React, { useState } from "react";
import PropTypes from "prop-types"
import "./Taskitem.css"

export default function Taskitem({id, title, taskstate, onTaskUpdate, onDeleteTask}){

  const [isEditing, setIsEditing] = useState(false)

  const [editableTitle, setEditableTitle] = useState(title)

  const onTitleChange = (event) => {

    const newTitle = event.target.value;
    setEditableTitle(newTitle)
    onTaskUpdate(id, newTitle, taskstate)
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
        setIsEditing(false)
        if(editableTitle.length === 0){
          onDeleteTask(id)
        }
    }
  
  }

  const OnTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value)
  }

  if(isEditing){
    return <input type="text" value={editableTitle}  onChange={onTitleChange} onKeyPress={onKeyPress}/>
  } else {
    return(
      <div className="task-item">
         <div onClick={(e) => setIsEditing(true)}>{title}</div>
         <select onChange={OnTaskStateChange} value={taskstate} className={taskstate}>
            <option value="Pendente" className="Pendente">Pendente</option>
            <option value="Fazendo" className="Fazendo">Fazendo</option>
            <option value="Completada" className="Completada">Completada</option>
         </select>
      </div>
    )
  } 
   

}

Taskitem.propTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskstate: PropTypes.string.isRequired
}