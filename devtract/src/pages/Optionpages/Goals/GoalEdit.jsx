import "./GoalEdit.css";

import {
    ArrowLeft,
    Calendar,
    Save,
    Plus
} from "lucide-react";

function GoalEdit({onClose}) {

    return (

        <div className="goal-edit-page">

            {/* Header */}

            <div className="edit-header">

                <button className="back-button" onClick={onClose}>
                    <ArrowLeft size={20}/>
                </button>

                <h1>Edit Goal</h1>

                <button className="save-header-btn">
                    <Save size={18}/>
                    Save
                </button>

            </div>


            {/* Form */}

            <div className="goal-edit-form">

                <div className="form-group">

                    <label>Goal Title</label>

                    <input
                        type="text"
                        value="Become React Developer"
                    />

                </div>

                <div className="form-group">

                    <label>Description</label>

                    <textarea
                        rows="5"
                        defaultValue="Master React and build amazing projects."
                    />

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Priority</label>

                        <select>

                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Status</label>

                        <select>

                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Pending</option>
                            <option>Hold</option>

                        </select>

                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Target Date</label>

                        <div className="date-input">

                            <Calendar size={18}/>

                            <input
                                type="date"
                                value="2026-12-31"
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Goal Icon</label>

                        <select>

                            <option>⚛️ React</option>
                            <option>💻 Coding</option>
                            <option>📚 Study</option>
                            <option>🏋️ Fitness</option>

                        </select>

                    </div>

                </div>

            </div>


            {/* Progress */}

            {/* <div className="progress-card">

                <div className="progress-top">

                    <h2>Goal Progress</h2>

                    <span>42%</span>

                </div>

                <div className="progress-track">

                    <div
                        className="progress-fill"
                        style={{width:"42%"}}
                    />

                </div>

                <p>2 of 5 milestones completed</p>

            </div> */}


            {/* Milestones */}

            {/* <div className="milestone-section">

                <div className="milestone-header">

                    <h2>Milestones</h2>

                    <button>

                        <Plus size={18}/>

                        Add Milestone

                    </button>

                </div>

                <div className="milestone-item">

                    <span>Learn JavaScript Fundamentals</span>

                    <span className="completed">Completed</span>

                </div>

                <div className="milestone-item">

                    <span>Learn React Basics</span>

                    <span className="completed">Completed</span>

                </div>

                <div className="milestone-item">

                    <span>Build 3 Projects</span>

                    <span className="progress-status">60%</span>

                </div>

                <div className="milestone-item">

                    <span>Learn Redux</span>

                    <span className="pending">Not Started</span>

                </div>

                <div className="milestone-item">

                    <span>Deploy Portfolio</span>

                    <span className="pending">Not Started</span>

                </div>

            </div> */}


            {/* Footer */}

            <div className="footer-buttons">

                <button className="cancel-btn">
                    Cancel
                </button>

                <button className="save-btn">

                    <Save size={18}/>

                    Save Changes

                </button>

            </div>

        </div>

    )

}

export default GoalEdit;