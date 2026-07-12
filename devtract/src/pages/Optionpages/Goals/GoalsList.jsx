import { FaReact } from 'react-icons/fa';
import './GoalsList.css';
import { icons } from './goalIcon';
import { Pencil } from 'lucide-react';
import { FiTrash2 } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { GoalContext } from '../../../context/GoalContext';
import GoalCompletionRate from './GoalCompletionRate';
import { useNavigate } from 'react-router-dom';
function GoalsList() {
    const { goalList } = useContext(GoalContext);
    const navigate = useNavigate();
    // const date = new Date().toISOString().split("T")[0];
    return (
        <>
            <div className="goal-list-container">
                {
                    goalList?.map((goal) => {
                        // console.log(`the goal I am getting is : ${JSON.stringify(goal)}`);
                        const iconData = icons.find((item) => item.name === goal.icon);
                        const Icon = iconData?.icon;
                        // console.log(`icon after comparison is : ${Icon}`);
                        return (
                            <div id={goal.id} className="goal-list">
                                <div className="list-left-section">
                                    <div className="goal-list-logo" style={{
                                        backgroundColor: `${iconData?.color}20`,
                                        color: iconData?.color
                                    }}> {Icon && <Icon size={40} />}</div>
                                    <div className="goal-list-content">
                                        <h2>{goal.title}</h2>

                                        <p>{goal.description}</p>

                                        <div className="goal-meta">
                                            <span
                                                className={`goal-status ${goal.status
                                                    ?.toLowerCase()
                                                    .replace(/\s+/g, "")}`}
                                            >
                                                {goal.status}
                                            </span>

                                            <span className="goal-date">
                                                🎯 {goal.duedate}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="goal-completion-rate">
                                    <GoalCompletionRate />
                                    <div className="goal-action-buttons">
                                        {/* <Pencil className="edit-goal-button" size={40} />
                                        <FiTrash2 className="delete-goal-button" size={40} /> */}

                                        {/* <p onClick={()=> navigate(`${goal.id}`)}>{`>`}</p> */}
                                        <p onClick={()=> navigate(`/app/goals/${goal.id}`)}>{`>`}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default GoalsList;