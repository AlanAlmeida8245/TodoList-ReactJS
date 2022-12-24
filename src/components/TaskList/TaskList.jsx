

import React, { useState } from "react";
import "./TaskList.css"
import PropTypes from "prop-types";
import Taskitem from "../Taskitem/Taskitem";
import plusicon from "../img/icons8-plus.svg"

export default function TaskList({title, taskState, onAddTask, tasks, onTaskUpdate,   onDeleteTask}){

    const addTask = () => {
       
        onAddTask('Nova Tarefa (Clique para Editar)', taskState)
    }

  

    return(
        <div className="tasklist">
            <div className={title}>{title}</div>
            <div className="content">
            {tasks.map((task) => {
                return <Taskitem 
                id = {task.id} 
                title = {task.title} 
                taskstate = {task.state}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
            />
            })}
              
            </div>
            <button onClick={addTask} className="botao">
                <img src={plusicon} alt="" width= "26px"/>
                <div>⠀Adicionar Tarefa</div>
                </button>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}
