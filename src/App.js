
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";



let idAcc = 0;
const gerarID = () =>{
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {

const [tasks, setTasks] = useState([])

const addTask = (title, state) => {
 
  const newTask = {
    id: gerarID(),
    title,
    state
  }
  setTasks((existingTasks) => {
    return [...existingTasks, newTask]
  })
}


  const updateTask = (id, title, state) =>{
    
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if(task.id === id)
        {
          return {...task, title, state}
        }
        else{
          return task;
        }
      })
    })
  }

  const deleteTask =(id) =>{
  setTasks((existingTasks) => {
    return existingTasks.filter(task => task.id !== id)
  })
}
  return (
    <div className="App">
        <NavBar />
        <div className="container">
          <TaskList title="Pendente" onAddTask={addTask} taskState= "Pendente" tasks ={tasks.filter(t => t.state === "Pendente")} onTaskUpdate={updateTask} onDeleteTask={deleteTask}
          />
           <TaskList title="Fazendo" onAddTask={addTask} taskState= "Fazendo" tasks ={tasks.filter(t => t.state === "Fazendo")} onTaskUpdate={updateTask} onDeleteTask={deleteTask}
          />
           <TaskList title="Completada" onAddTask={addTask}  taskState= "Completada"  tasks ={tasks.filter(t => t.state === "Completada")} onTaskUpdate={updateTask} onDeleteTask={deleteTask}
          />
        </div>
        

    </div>
    
  );

  
}

export default App;
