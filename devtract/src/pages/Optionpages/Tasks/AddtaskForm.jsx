import { FiX } from 'react-icons/fi';
import './AddtaskForm.css';
import { useState } from 'react';
import AddTaskButton from '../../../components/Buttons/AddTaskButton';
import axios from 'axios';
import StatusOption from './StatusOption';
import { useNavigate } from 'react-router-dom';
import { AppWindowMacIcon } from 'lucide-react';
import { getToken } from '../../../utils/auth';

function AddtaskForm({ mode, setTask, onClose, taskToedit }) {
    const navigate = useNavigate();

    const priorities = ["Low", "Medium", "high"];
    const status = ["pending", "inprogress", "completed"];
    
    const [formData, setFormData] = useState({
        title: taskToedit?.title || "",
        description: taskToedit?.description || "",
        priority: taskToedit?.priority || "Low",
        status: taskToedit?.status || "inprogress",
        dueDate: taskToedit?.duedate || ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const token = getToken();
            if (mode === "create") {
                const response = await axios.post(
                    "http://localhost:3000/app/tasks",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,

                        }
                    }
                );

                console.log("post just ran");
                setTask(prev => [...prev, response.data]);
                alert(`task created Is ${response.data.title}`);
                onClose();
            }
            if (mode === "edit") {
                const response = await axios.patch(`http://localhost:3000/app/tasks/${taskToedit.id}`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }

                );

                setTask(response.data);

                alert(`task updated`);
                onClose();
            }
        } catch (error) {
            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                navigate("/login");
            }

            alert(error.message);
        }

    }

    function handleChange(e){
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }

    return (
        <>
            <div className="task-form-cotainer">

                <div className="top-task-container">
                    <h1>{mode === "edit" ? `Edit task` : `Add New Task`}</h1>
                    <FiX
                        className='cancelButton'
                        size={30}
                        onClick={onClose}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-form-container">
                        <div className="title input-content-style">
                            <span>Task Title</span>
                            <input
                                name='title'
                                placeholder='Enter task title'
                                className='title-input-field'
                                type='text'
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="description input-content-style">
                            <span>Description</span>
                            <textarea
                                name='description'
                                placeholder='Enter task description | optional'
                                className='description-input-field'
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="priority-date-container">

                            <div className="priority input-content-style">
                                <span>priority</span>
                                <select
                                    name='priority'
                                    className='priority-option-field'
                                    value={formData.priority}
                                    onChange={handleChange}
                                    id="priority"
                                >
                                    {priorities.map((items) => {
                                        return (
                                            <option key={items} value={items}>{items}</option>
                                        );
                                    })}

                                </select>
                            </div>

                            <div className='task-status-container input-content-style'>
                                <span>Status</span>
                                <StatusOption 
                                    taskStatus={formData.status} 
                                    setTaskStatus={(value)=>{
                                                    setFormData((prev)=>({...prev, status:value}))
                                                }} 
                                    status={status} 
                                />
                            </div>

                            <div className="due-date input-content-style">
                                <span>Due Date</span>
                                <input
                                    name='dueDate'
                                    placeholder='Select Date'
                                    className='date-input-field'
                                    type="date"
                                    value={formData.dueDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={handleChange}
                                    onFocus={(e) => e.target.type = "date"}

                                    // if no value is selecte only then do type = "text"
                                    onBlur={(e) => { if (!e.target.value) { e.target.type = "text" } }}
                                />
                            </div>

                        </div>
                        <div className="buttons">
                            {/* even if we don't give button type submit by default it is submit button */}
                            <button onClick={onClose} className="cancel-button" type='button'>Cancel</button>
                            <button className="task-form-button" type='submit'>{mode === "edit" ? `Update Task` : `Add Task`}</button>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default AddtaskForm;