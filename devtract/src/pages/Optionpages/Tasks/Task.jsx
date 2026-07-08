import { useEffect, useState } from "react";
import "./Task.css";
import AddtaskForm from "./AddtaskForm";
import AddTaskButton from "../../../components/Buttons/AddTaskButton";
import TaskList from "./TaskList";
import { Activity, CheckCircle2, Clock3, LayoutGrid } from "lucide-react";
import ViewTask from "./ViewTask";


function Tasks({getTask, taskToView, setTaskToView, viewTaskDetails, setViewTaskDetails, taskToedit, setTaskToedit, mode, setMode, setShowForm, showForm, task, setTask, filters, setActiveFilter, activeFilter }) {

    const icons = {
        "All": <LayoutGrid />,
        "Pending": <Clock3 />,
        "InProgress": <Activity />,
        "Completed": <CheckCircle2 />
    }

    return (
        <div className="task-wrapper-container">
            <div className="task-heading-container">
                <h1>My Tasks</h1>
                <AddTaskButton
                    className="addtask-button"
                    onClick={()=> setShowForm(true)}
                    setMode = {setMode}
                    setTaskToedit = {setTaskToedit}
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
                    <AddtaskForm mode = {mode} setTask={setTask} onClose={() => setShowForm(!showForm) } taskToedit={taskToedit}/>

                </div>
            )}

            <div className="task-list-container">
                <div className="task-list-header">
        <h2>Tasks</h2>
        <span>{task?.length || 0} Tasks</span>
    </div>

    <div className="list-container">
        <TaskList
            getTask={getTask}
            setTaskToView={setTaskToView}
            setViewTaskDetails={setViewTaskDetails}
            task={task}
            setTask={setTask}
            activeFilter={activeFilter}
            mode={mode}
            setMode={setMode}
            setShowForm={setShowForm}
            setTaskToedit={setTaskToedit}
        />
    </div>

                {
                    viewTaskDetails && (
                        <div className="modal-overlay">
                            <ViewTask task={taskToView} onClose={() => setViewTaskDetails(false)} />                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Tasks;