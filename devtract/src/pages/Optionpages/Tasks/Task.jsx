import { useEffect, useState } from "react";
import "./Task.css";
import AddtaskForm from "./AddtaskForm";
import AddTaskButton from "../../../components/Buttons/AddTaskButton";
import TaskList from "./TaskList";
import { Activity, CheckCircle2, Clock3, LayoutGrid } from "lucide-react";


function Tasks({task, setTask }) {

    const [activeFilter, setActiveFilter] = useState("All")
    const [showForm, setShowForm] = useState(false);

    function handleAddTask() {
        setShowForm((prev) => !prev);
    }

    const filters = ["All", "Pending", "In Progress", "Completed"];

    const icons = {
        All: <LayoutGrid />,
        Pending: <Clock3 />,
        "In Progress": <Activity />,
        Completed: <CheckCircle2 />
    }

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
                            className={activeFilter === filter ? "filters active-filter" : "filters"}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {icons[filter]}
                            {filter}
                        </li>
                    ))}
                </ul>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <AddtaskForm setTask={setTask} onClose={() => setShowForm(!showForm)} />

                </div>
            )}

            <div className="task-list-container">
                <div>
                    <h4 className="task-head">Tasks</h4>

                </div>

                <div className="list-container">
                    <TaskList task={task} />
                </div>
            </div>
        </div>
    );
}

export default Tasks;