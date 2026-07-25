import { BiDownArrow } from "react-icons/bi";
import "./MilestoneCard.css";

import {
    CheckCircle2,
    Circle,
    ChevronUp,
    ChevronDown,
    Pencil,
    Trash2,
} from "lucide-react";
import { useContext, useState } from "react";
import AddSubTaskForm from "./AddSubTaskForm";
import { getToken } from "../../../utils/auth";
import axios from "axios";
import { MileStoneDataContext } from "../../../context/MileStoneContext";
import { GoalContext } from "../../../context/GoalContext";


async function handleDelete(id, getMileStoneData, getGoals) {
    const token = getToken();

    try {
        const response = await axios.delete(`http://localhost:3000/app/goals/milestone/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        await getMileStoneData();
        await getGoals();

    } catch (error) {
        console.log(error.message);
    }
}

async function handleComplete(getMileStoneData, id, getGoals) {
    const token = getToken();

    try {

        const response = await axios.patch(`http://localhost:3000/app/goals/milestone/status/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        await getMileStoneData();
        await getGoals();

        alert("Marked all task as complete");

    } catch (error) {
        console.log(error.message);
    }
}


async function handleTaskCompletion(milestoneId, taskid, getMileStoneData, getGoals) {
    const token = getToken();

    try {

        const response = await axios.patch(`http://localhost:3000/app/goals/milestone/tasks/status/${milestoneId}/${taskid}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        await getMileStoneData();
        await getGoals();

    } catch (error) {
        console.log(error.message);
    }
}

function MilestoneCard({ milestone, expanded, onToggle }) {

    const { getMileStoneData } = useContext(MileStoneDataContext);
    const { getGoals } = useContext(GoalContext);
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [editTaskForm, setEditTaskForm] = useState(false);

    return (

        <div className="milestone-card" >

            <div className="milestone-top">

                <div className="milestone-left">

                    {
                        milestone.status === "completed"
                            ?
                            <CheckCircle2
                                className="done-icon"
                                size={24}
                                onClick={() => handleComplete(getMileStoneData, milestone.id , getGoals)}
                            />
                            :
                            <Circle
                                className="pending-icon"
                                size={24}
                                onClick={() => handleComplete(getMileStoneData, milestone.id , getGoals)}
                            />
                    }

                    <div>

                        <h3>
                            {milestone.title}
                        </h3>

                        <p>
                            {milestone.description}
                        </p>

                    </div>

                </div>

                <div className="milestone-right">

                    <span
                        className={`status ${milestone.status}`}
                    >

                        {milestone.status}

                    </span>

                    {
                        milestone.status === "In Progress" &&
                        <strong>
                            {milestone.progress}%
                        </strong>
                    }

                    {
                        milestone.date &&
                        <span className="date">
                            {milestone.date}
                        </span>
                    }

                    <button className="subtask-edit-btn" onClick={() => setEditTaskForm(true)}>

                        <Pencil size={20} />

                    </button>

                    <button className="delete-btn-container">

                        <Trash2
                            className="delete-btn"
                            size={20}
                            onClick={() => handleDelete(milestone.id, getMileStoneData, getGoals)}
                        />

                    </button>


                    <button
                        className="expand-btn"
                        onClick={onToggle}
                    >
                        {
                            expanded
                                ? <ChevronUp size={22} />
                                : <ChevronDown size={22} />
                        }
                    </button>

                </div>

            </div>

            {
                expanded && (
                    <div className="subtask-list">
                        {(milestone?.tasks)?.map(task => (

                            <div
                                key={task.id}
                                className="subtask"
                            >

                                {
                                    (task.status === "completed" || milestone.status === "completed")
                                        ? (
                                            <CheckCircle2
                                                size={18}
                                                className="subtask-done"
                                                onClick={() => handleTaskCompletion(milestone.id, task.id, getMileStoneData, getGoals)}
                                            />
                                        )
                                        : (
                                            <Circle
                                                size={18}
                                                className="subtask-pending"
                                                onClick={() => handleTaskCompletion(milestone.id, task.id, getMileStoneData, getGoals)}
                                            />
                                        )
                                }

                                <span>{task.title}</span>
                            </div>

                        ))}

                        <button className="add-task-btn" onClick={() => setShowTaskForm(true)}>
                            + Add Task
                        </button>

                    </div>
                )
            }
            {
                showTaskForm && <AddSubTaskForm milestoneId={milestone.id} onClose={() => setShowTaskForm(false)} />
            }

            {
                editTaskForm && <AddSubTaskForm mode="edit" milestone={milestone} onClose={() => setEditTaskForm(false)} />
            }

        </div>

    )

}

export default MilestoneCard;