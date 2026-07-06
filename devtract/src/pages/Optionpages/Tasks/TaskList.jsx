import { Pencil } from 'lucide-react';
import './TaskList.css';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../utils/auth';
import AddtaskForm from './AddtaskForm';

function TaskList({ task, setTask, activeFilter, setMode, setTaskToedit, setShowForm}) {
    const filteredTask = activeFilter ? (activeFilter === "All" ? task : task.filter((f) => f.status === activeFilter.toLowerCase())) : task;
    async function handleDeleteTask(id){
        try {

            const token = getToken();
            const response = await axios.delete(
                                            `http://localhost:3000/app/tasks/${id}`,
                                            {
                                                headers : {
                                                    Authorization : `Bearer ${token}`,
                                                }
                                            }
                                        );
            // setTask(response.data); --> this is correct but instead of this 
            alert(response.data);
            setTask((prev) => prev.filter(t => t.id !== id)); 

        } catch (error) {
            alert(error.message);
        }
    }

    function handleEditTask(task){
        setTaskToedit(task)
        setMode("edit");
        setShowForm(true);
    }

    return (
        <>

            {
                filteredTask.length > 0 ?
                        filteredTask.map((task) => {
                            return (

                                <div key = {task.id} className="task-lists">
                                    <div className="task-left-section">
                                        <input type="checkbox" className='input-box' onClick={(e)=>{}}/>
                                        <h3>{task.title}</h3>
                                    </div>

                                    <div className="task-right-section">
                                        <span className={`task-status ${task.status}`}>{task.status}</span>
                                        <Pencil onClick = {()=> handleEditTask(task)} className = 'edit-task-button' size={20} />
                                        <FiTrash2 onClick={()=>handleDeleteTask(task.id )} className = "delete-task-button" size={20} />
                                    </div>
                                </div>

                            )
                        }) 
                    
                    :
                    <h1 className='content-before-task'>{`Nothing ${activeFilter}`}</h1>
            }
        </>
    )
}

export default TaskList;