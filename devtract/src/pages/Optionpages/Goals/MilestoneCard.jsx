import { BiDownArrow } from "react-icons/bi";
import "./MilestoneCard.css";

import {
    CheckCircle2,
    Circle,
    ChevronUp,
    ChevronDown,
    Pencil,
} from "lucide-react";
import { useState } from "react";
import AddSubTaskForm from "./AddSubTaskForm";

function MilestoneCard({ milestone, expanded, onToggle }) {

    const [showTaskForm, setShowTaskForm] = useState(false);

    return (

        <div className="milestone-card" >

            <div className="milestone-top">

                <div className="milestone-left">

                    {
                        milestone.status === "Completed"
                            ?
                            <CheckCircle2
                                className="done-icon"
                                size={24}
                            />
                            :
                            <Circle
                                className="pending-icon"
                                size={24}
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
                        className={`status ${milestone.status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
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

                    <button>

                        <Pencil size={18} />

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
                    {console.log(milestone)}
                        {(milestone?.tasks)?.map(task => (
                
                            <div
                                key={task.id}
                                className="subtask"
                            >

                                {
                                    task.completed
                                        ?
                                        <CheckCircle2
                                            size={18}
                                            className="subtask-done"
                                        />
                                        :
                                        <Circle
                                            size={18}
                                            className="subtask-pending"
                                        />
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
                showTaskForm && <AddSubTaskForm milestoneId = {milestone.id} onClose = {() => setShowTaskForm(false)}/>
            }

        </div>

    )

}

export default MilestoneCard;