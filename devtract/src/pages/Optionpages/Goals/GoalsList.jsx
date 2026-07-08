import { FaReact } from 'react-icons/fa';
import './GoalsList.css';
import { icons } from './goalIcon';
import { Pencil } from 'lucide-react';
import { FiTrash2 } from 'react-icons/fi';
function GoalsList({ goalList }) {
    const date = new Date().toISOString().split("T")[0];
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
                                        <span>{goal.description}</span>
                                        <span>{goal.duedate}</span>
                                    </div>
                                </div>

                                <div className="goal-completion-rate">
                                    <div className="goal-action-buttons">
                                        <Pencil className="edit-goal-button" size={40} />
                                        <FiTrash2 className="delete-goal-button" size={40} />
                                    </div>
                                    <h1>completion rate</h1>
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