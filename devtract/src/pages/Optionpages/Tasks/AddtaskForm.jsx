import { FiX } from 'react-icons/fi';
import './AddtaskForm.css';
import { useState } from 'react';
import AddTaskButton from '../../../components/Buttons/AddTaskButton';
import axios from 'axios';
import StatusOption from './StatusOption';
import { useNavigate } from 'react-router-dom';
import { AppWindowMacIcon } from 'lucide-react';

function AddtaskForm({ mode, setTask, onClose, taskToedit }) {
    const navigate = useNavigate();

    const priorities = ["Low", "Medium", "high"];
    const status = ["pending", "inprogress", "completed"];

    // const [taskStatus, setTaskStatus] = useState("inprogress");
    const [taskStatus, setTaskStatus] = useState(taskToedit?.status || "inprogress");
    // const [priority, setPriority] = useState("Low");
    const [priority, setPriority] = useState(taskToedit?.priority || "Low");
    // const [dueDate, setDueDate] = useState("");
    const [dueDate, setDueDate] = useState(taskToedit?.duedate || "");
    // const [description, setDescription] = useState("");
    const [description, setDescription] = useState(taskToedit?.description || "");
    // const [title, setTitle] = useState("");
    const [title, setTitle] = useState(taskToedit?.title || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            taskStatus,
            priority,
            dueDate,
        }

        try {
            const token = localStorage.getItem("token");
            if (mode === "create") {
                console.log("the create mode is on and the token is : ",token);
                console.log("the task to be aded is : ", JSON.stringify(newTask));
                const response = await axios.post(
                    "http://localhost:3000/app/tasks",
                    newTask,
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
                    newTask,
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
            alert(error.message);
            console.log(error.message);
            // localStorage.removeItem("token");
            // navigate("/login");
        }



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
                                placeholder='Enter task title'
                                className='title-input-field'
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="description input-content-style">
                            <span>Description</span>
                            <textarea
                                placeholder='Enter task description | optional'
                                className='description-input-field'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>


                        <div className="priority-date-container">

                            <div className="priority input-content-style">
                                <span>priority</span>
                                <select
                                    className='priority-option-field'
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    name="priority" id="priority"
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
                                <StatusOption taskStatus={taskStatus} setTaskStatus={setTaskStatus} status={status} />
                            </div>

                            <div className="due-date input-content-style">
                                <span>Due Date</span>
                                <input
                                    placeholder='Select Date'
                                    className='date-input-field'
                                    type="date"
                                    value={dueDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setDueDate(e.target.value)}
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