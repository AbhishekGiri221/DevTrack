import { FiX } from 'react-icons/fi';
import './AddtaskForm.css';
import { useState } from 'react';
import AddTaskButton from '../../../components/Buttons/AddTaskButton';


// function TaskForm(props) {
//   console.log(props);
// }
// props will be:
// {
//   addTask: function addTask() {} --> so for accessing addTask will we access it as props.addTask
// }

function AddtaskForm({onClose,addTask}) {

    const priorities = ["Low", "Medium", "high"];
    const [priority, setPriority] = useState("Low");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newTask = {
            title,
            description,
            priority,
            dueDate,
        }

        console.log("hii", newTask);
        addTask(newTask);
        onClose();
    }
    return (
        <>
            <div className="task-form-cotainer">

                <div className="top-task-container">
                    <h1>Add New Task</h1>
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
                                    onBlur={(e) =>{if(!e.target.value){e.target.type = "text"}}}
                                />
                            </div>

                        </div>
                        <div className="buttons">
                            {/* even if we don't give button type submit by default it is submit button */}
                            <button className = "cancel-button" type='button'>Cancel</button>
                            <AddTaskButton type='submit'>Add Task</AddTaskButton>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default AddtaskForm;