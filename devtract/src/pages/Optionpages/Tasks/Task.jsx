import { useState } from "react";
import "./Task.css";
import AddtaskForm from "./AddtaskForm";
import AddTaskButton from "../../../components/Buttons/AddTaskButton";
import TaskList from "./TaskList";

function Tasks() {

    const [activeFilter, setActiveFilter] = useState("All")
    const [showForm, setShowForm] = useState(false);
    function handleAddTask() {
        // open a form for adding a task and from there 
        // there should be a button to add task on click of that
        // you should be able to handle the adding of the task
        setShowForm((prev) => !prev);
    }

    const filters = ["All", "Pending", "Completed"];

    return (
        <div className="task-wrapper-container">
            <div className="task-heading-container">
                <h1>My Tasks</h1>
                <AddTaskButton
                    className="addtask-button"
                    onClick={handleAddTask}
                >
                    + Add Task
                </AddTaskButton>
            </div>

            <div className="filter-container">
                <ul className="filter-list">
                    {filters.map((filter) => (
                        <li
                            key={filter}
                            className={activeFilter === filter ? "active-filter" : ""}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="task-list-container">

            </div>

            {showForm && (
                <div className="modal-overlay">
                    <AddtaskForm onClose={() => setShowForm(!showForm)} />

                </div>
            )}

            <div className="task-list-container">
                <TaskList />
            </div>
        </div>
    );
}

export default Tasks;