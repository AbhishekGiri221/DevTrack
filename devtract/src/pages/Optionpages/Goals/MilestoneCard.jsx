import "./MilestoneCard.css";

import {
    CheckCircle2,
    Circle,
    ChevronUp,
    ChevronDown,
    MoreVertical
} from "lucide-react";

function MilestoneCard({ milestone }) {

    return (

        <div className="milestone-card">

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

                        <MoreVertical size={18}/>

                    </button>

                    {
                        milestone.expanded &&
                        <ChevronUp size={18}/>
                    }

                </div>

            </div>

            {
                milestone.expanded &&

                <div className="subtask-list">

                    {
                        milestone.tasks.map(task=>(
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

                                <span>
                                    {task.title}
                                </span>

                            </div>
                        ))
                    }

                </div>

            }

        </div>

    )

}

export default MilestoneCard;