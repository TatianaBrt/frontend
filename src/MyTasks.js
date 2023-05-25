import {FaEdit } from 'react-icons/fa';
import {AiFillDelete } from 'react-icons/ai'



export const MyTasks =({text, updatingInInput, deleteTask})=>{
    return (
        <div>
            <p>{text}</p>
            <FaEdit onClick={updatingInInput}></FaEdit>
            <AiFillDelete onClick={deleteTask}></AiFillDelete>
           

        </div>
    )
}