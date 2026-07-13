import axios, { create } from "axios";
import { getToken } from "../../../utils/auth";
import "./AddMileStone.css";
import { FiX, FiPlus, FiTrash2 } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MileStoneDataContext } from "../../../context/MileStoneContext";
import { GoalContext } from "../../../context/GoalContext";

function AddMilestoneForm({ onClose }) {

    const { id } = useParams();
    const {milestoneData, setMilestoneData} = useContext(MileStoneDataContext);
    const {getGoals} = useContext(GoalContext)
    const [mileStoneFormData, setMileStoneFormData] = useState({
        title: "",
        description: "",
        duedate: "",
        priority: "",
        status: ""
    });

    
    async function handleMileStoneSubmit(e) {
        e.preventDefault();c
        try {
            const token = getToken();
    
            const response = await axios.post(
                `http://localhost:3000/app/goals/${id}`,
                mileStoneFormData,
                {
                    headers:{
                        Authorization : `Bearer ${token}`
                    }
                }
    
            )
            onClose();
            console.log("this is after submission : ", JSON.stringify(response.data));
            setMilestoneData(response.data);
            await getGoals();
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleChange(e) {
        const createMileStone = {
            ...mileStoneFormData, [e.target.name]: e.target.value
        }

        setMileStoneFormData(createMileStone);
    }
    return (
        <div className="milestone-overlay">

            <div className="milestone-form">

                <div className="milestone-header">

                    <h2>Add Milestone</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        <FiX size={22} />
                    </button>

                </div>

                <form onSubmit={handleMileStoneSubmit}>

                    <div className="form-group">

                        <label>Milestone Title</label>

                        <input
                            name="title"
                            value={mileStoneFormData.title}
                            type="text"
                            placeholder="Enter milestone title"
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            value={mileStoneFormData.description}
                            rows="4"
                            placeholder="Describe this milestone..."
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Due Date</label>

                            <input
                                type="date"
                                name="duedate"
                                value={mileStoneFormData.duedate}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Priority</label>

                            <select name="priority" value={mileStoneFormData.priority} onChange={handleChange}>
                                <option value={"low"}>Low</option>
                                <option value={"medium"}>Medium</option>
                                <option value={"high"}>High</option>
                            </select>

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Status</label>

                        <select name="status" value={mileStoneFormData.status} onChange={handleChange}>
                            <option value={"pending"}>Pending</option>
                            <option value={"inprogress"}>In Progress</option>
                            <option value={"completed"}>Completed</option>
                        </select>

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
                            type="submit"
                            className="save-btn"
                        >
                            Save Milestone
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddMilestoneForm;