import axios from 'axios';

const getAllTasks =(setTask)=>{
    axios.get("https://todolist-ldzr.onrender.com")
    .then (({data})=>{console.log(data)
    setTask(data);
})
}

const addTask=(title,setTitle,setTask)=>{
    axios.post("https://todolist-ldzr.onrender.com/saveToDo", {title})
    .then((data)=>{
        console.log(data)
        setTitle("")
        getAllTasks(setTask)
    })
}

const editToDo=(_id,title,setTitle,setTask,setEditing)=>{
    axios.post(`https://todolist-ldzr.onrender.com/editToDo`, {_id,title})
    .then((data)=>{
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllTasks(setTask)
    })
}


const deleteTask=(_id,setTask)=>{
    axios.post("https://todolist-ldzr.onrender.com/deleteToDo", {_id})
    .then((data)=>{
        console.log(data)
        getAllTasks(setTask)
    })
}








export {getAllTasks,addTask,editToDo,deleteTask};