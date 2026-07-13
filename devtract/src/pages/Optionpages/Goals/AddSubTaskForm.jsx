import { FiX } from "react-icons/fi";
import "./AddSubTaskForm.css";
import { useContext, useState } from "react";
import { getToken } from "../../../utils/auth";
import { useParams } from "react-router-dom";
import { MileStoneDataContext } from "../../../context/MileStoneContext";
import axios from "axios";

function AddSubTaskForm({ milestoneId, onClose }) {

    const { setMilestoneData } = useContext(MileStoneDataContext);

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "medium",
        status: "pending"
    });

    function handleChange(e) {
        setTaskData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const token = getToken();
        console.log(taskData);

        try {


            const response = await axios.post(`http://localhost:3000/app/goals/mileStone/${milestoneId}`,
                taskData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            console.log(`the response is ${JSON.stringify(response.data)}`);
            setMilestoneData(prev =>
                prev.map(item =>
                    item.id === response.data.id ? response.data : item
                )
            ); onClose();

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="task-overlay">

            <div className="task-form">

                <div className="task-header">

                    <h2>Add New Task</h2>

                    <button
                        type="button"
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FiX size={22} />
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Task Title</label>

                        <input
                            type="text"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            placeholder="Enter task title"
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            rows="4"
                            name="description"
                            value={taskData.description}
                            onChange={handleChange}
                            placeholder="Describe the task..."
                        />

                    </div>

                    <div className="form-row">


                        <div className="form-group">

                            <label>Priority</label>

                            <select
                                name="priority"
                                value={taskData.priority}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label>Status</label>

                            <select
                                name="status"
                                value={taskData.status}
                                onChange={handleChange}
                            >
                                <option value="pending">Pending</option>
                                <option value="inprogress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>

                        </div>
                    </div>


                    <div className="button-group">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            className="save-btn"
                            type="submit"
                        >
                            Add Task
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddSubTaskForm;