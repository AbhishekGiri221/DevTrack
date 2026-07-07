import { AwardIcon, Pencil } from 'lucide-react';
import './TaskList.css';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../utils/auth';
import AddtaskForm from './AddtaskForm';

function TaskList({ setTaskToView, setViewTaskDetails, task, setTask, activeFilter, setMode, setTaskToedit, setShowForm }) {
    const filteredTask = activeFilter ? (activeFilter === "All" ? task : task.filter((f) => f.status === activeFilter.toLowerCase())) : task;
    async function handleDeleteTask(id) {
        try {

            const token = getToken();
            const response = await axios.delete(
                `http://localhost:3000/app/tasks/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
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

    function handleEditTask(task) {
        setTaskToedit(task)
        setMode("edit");
        setShowForm(true);
    }

    function handleViewTask(task) {
        setTaskToView(task);
        setViewTaskDetails(true);
    }

    async function handleTaskCompletion(e, id) {
        e.stopPropagation();
        console.log(e.target);
        const token = getToken();
        try {

            const response = await axios.put(
                `http://localhost:3000/app/tasks/${id}`,
                { status: "completed" },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )


            setTask((prev) => (
                prev.map(task => task.id === id ? { ...task, status: "completed" } : task)
            ));
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>

            {
                filteredTask.length > 0 ?
                    filteredTask.map((task) => {
                        return (

                            <div key={task.id} className="task-lists">
                                <div className="task-left-section" onClick={() => handleViewTask(task)}>
                                    <input type="checkbox" className='input-box' disabled = {task.status === "completed"} checked={task.status === "completed"} onClick={(e) => handleTaskCompletion(e, task.id)} />
                                    <h3 className={task.status === "completed" ? "completed-task" : "taskList-title"}>{task.title}</h3>
                                </div>

                                <div className="task-right-section">
                                    <span className={`task-status ${task.status}`}>{task.status}</span>
                                    <Pencil onClick={() => handleEditTask(task)} className='edit-task-button' size={20} />
                                    <FiTrash2 onClick={() => handleDeleteTask(task.id)} className="delete-task-button" size={20} />
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