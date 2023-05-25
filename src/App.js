import { useEffect, useState } from 'react';
import './App.css';
import { MyTasks } from './MyTasks';
import { getAllTasks, addTask, editToDo,deleteTask } from './FetchTasks';

function App() {
const [myTask,setTask]=useState([]);
const [title,setTitle]=useState("");
const [editing,setEditing]=useState(false);
const [taskId,setTaskId]=useState("")

useEffect(()=>{
  getAllTasks(setTask)
}, [])

const updatingInInput=(_id, title)=>{
  setEditing(true)
  setTitle(title)
  setTaskId(_id)
}

  return(
    <div>
         <input 
      type="text" 
      placeholder="Add a task"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />

<button
disabled={!title} 
onClick=
{editing ? ()=>editToDo(taskId,title,setTitle,setTask,setEditing):()=>addTask(title,setTitle,setTask)}>
{editing ? "Edit":"Add"}
  </button>
      
            
      {myTask.map((task)=> <MyTasks text={task.title} key={task._id}
      updatingInInput={()=>updatingInInput(task._id,task.title)}
      deleteTask={()=>deleteTask(task._id,setTask)}
      />
      )}
    </div>
  )
}

export default App;
