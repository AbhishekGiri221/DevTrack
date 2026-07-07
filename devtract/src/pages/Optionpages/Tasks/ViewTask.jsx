import { FiX } from "react-icons/fi";
import "./ViewTask.css";

function ViewTask({ task, onClose }) {
    if (!task) return null;

    return (
        <div className="view-task-container">

            <div className="view-task-header">
                <h2>View Task</h2>

                <FiX
                    size={28}
                    className="cancelButton"
                    onClick={onClose}
                />
            </div>

            <div className="view-task-content">

                <div className="task-section">
                    <span className="section-title">Task Title</span>
                    <div className="section-box">
                        {task.title}
                    </div>
                </div>

                <div className="task-section">
                    <span className="section-title">Description</span>

                    <div className="section-box description-box">
                        {task.description || "No description provided"}
                    </div>
                </div>

                <div className="details-row">

                    <div className="detail-card">
                        <span>Priority</span>
                        <strong>{task.priority}</strong>
                    </div>

                    <div className="detail-card">
                        <span>Status</span>
                        <strong>{task.status}</strong>
                    </div>

                    <div className="detail-card">
                        <span>Due Date</span>
                        <strong>{task.duedate}</strong>
                    </div>

                </div>

                {/* ------> Task-created-At <--------- */}
                {/* <div className="task-section">
                    <span className="section-title">
                        Created On
                    </span>

                    <div className="section-box">
                        {task.createdAt || "-"}
                    </div>
                </div> */}

                {/* ------> Last-task-Update <--------- */}
                {/* <div className="task-section">
                    <span className="section-title">
                        Last Updated
                    </span>

                    <div className="section-box">
                        {task.updatedAt || "-"}
                    </div>
                </div> */}

                <div className="button-container">

                    <button
                        className="close-task-button"
                        onClick={onClose}
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ViewTask;