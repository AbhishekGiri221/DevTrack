import { FiX } from "react-icons/fi";
import "./AddSubTaskForm.css";
import { useContext, useState } from "react";
import { getToken } from "../../../utils/auth";
import { useParams } from "react-router-dom";
import { MileStoneDataContext } from "../../../context/MileStoneContext";
import axios from "axios";
import { GoalContext } from "../../../context/GoalContext";

function AddSubTaskForm({mode, milestone, milestoneId, onClose }) {
    console.log(`the milestone id is ${milestoneId}`);
    const { setMilestoneData } = useContext(MileStoneDataContext);
    const {getGoals} = useContext(GoalContext);

    const [taskData, setTaskData] = useState({
        title: milestone?.title || "",
        description: milestone?.description || "",
        priority: milestone?.priority || "low",
        status: milestone?.status || "pending"
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

    try {
        const response = await axios.post(
            `http://localhost:3000/app/goals/milestone/${milestoneId}`,
            taskData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setMilestoneData(prev =>
            prev.map(item =>
                item.id === response.data.id ? response.data : item
            )
        );

        onClose();
    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

async function handleUpdate(e) {
    e.preventDefault();

    const token = getToken();

    try {
        const response = await axios.patch(
            `http://localhost:3000/app/goals/milestone/${milestone.id}`,
            taskData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        getGoals();
        setMilestoneData(prev =>
            prev.map(item =>
                item.id === response.data.id ? response.data : item
            )
        );

        alert("Updated");
        onClose();

    } catch (error) {
        console.log(error.response?.data || error.message);
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

                <form onSubmit={mode === "edit" ? handleUpdate : handleSubmit}>

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
                            {
                                mode === "edit" ? `Update Task` : `Add Task`
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddSubTaskForm;