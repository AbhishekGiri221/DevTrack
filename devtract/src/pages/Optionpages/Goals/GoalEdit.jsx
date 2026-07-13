import "./GoalEdit.css";

import {
    ArrowLeft,
    Calendar,
    Save,
    Plus,
    ArrowUpAZ
} from "lucide-react";

import { icons } from "./goalIcon";
import { useContext, useState } from "react";
import { GoalContext } from "../../../context/GoalContext";

function GoalEdit({ goal, onClose }) {
    const { updateGoals } = useContext(GoalContext);

    const [formData, setFormData] = useState({
        id : goal.id,
        icon: goal.icon,
        title: goal.title,
        description: goal.description,
        duedate: goal.duedate,
        status: goal.status,
        priority: goal.priority
    })
    function handleChange(e) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await updateGoals(formData);
        onClose();
    }
    return (

        <div className="goal-edit-page">

            {/* Header */}

            <div className="edit-header">

                <button className="back-button" onClick={onClose}>
                    <ArrowLeft size={20} />
                </button>

                <h1>Edit Goal</h1>

            </div>


            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="goal-edit-form">

                    <div className="form-group">

                        <label>Goal Title</label>

                        <input
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Priority</label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>

                            </select>

                        </div>

                        <div className="form-group">

                            <label>Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >

                                <option value="inprogress">inprogress</option>
                                <option value="completed">completed</option>
                                <option value="pending">pending</option>

                            </select>

                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Target Date</label>

                            <div className="date-input">

                                <Calendar size={18} />

                                <input
                                    type="date"
                                    name="duedate"
                                    value={formData.duedate}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-group">

                            <label>Goal Icon</label>

                            <select
                                name="icon"
                                value={formData.icon}
                                onChange={handleChange}
                            >

                                {
                                    icons.map((icon) => (
                                        <option key={icon.id} value={icon.name}>{icon.name}</option>
                                    ))
                                }

                            </select>

                        </div>

                    </div>

                </div>


                {/* Footer */}

                <div className="footer-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                        type="button"
                    >
                        Cancel
                    </button>

                    <button className="save-btn" type="submit">

                        <Save size={18} />

                        Save Changes

                    </button>

                </div>
            </form>
        </div>


    )

}

export default GoalEdit;