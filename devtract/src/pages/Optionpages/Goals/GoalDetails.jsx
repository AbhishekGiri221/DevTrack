import "./GoalDetails.css";

import {
    ArrowLeft,
    Calendar,
    Pencil,
    MoreVertical,
    Plus
} from "lucide-react";
import { useContext, useState } from "react";
import MilestoneCard from "./MilestoneCard";
import GoalEdit from "./GoalEdit";
import { useParams } from "react-router-dom";
import { GoalContext } from "../../../context/GoalContext";
import { icons } from "./goalIcon";
import GoalCompletionRate from "./GoalCompletionRate";
import { completionRateContext } from "../../../context/GoalCompleteRateContext";
import AddMilestoneForm from "./AddMileStone";
import { MileStoneDataContext } from "../../../context/MileStoneContext";


function GoalDetails() {

    const [showMileStoneForm, setShowMileStoneForm] = useState(false);
    const [showGoalEdit, setShowGoalEdit] = useState(false);
    const { id } = useParams();
    const { goalList } = useContext(GoalContext);
    const goal = goalList?.find((g) => g?.id === Number(id))

    const { progress } = useContext(completionRateContext);

    const {milestoneData} = useContext(MileStoneDataContext);

    if (!goal) {
        return <h2>Loading ...</h2>
    }

    const iconObject = icons.find((i) => (i?.name === goal?.icon));

    const Icon = iconObject.icon;

    return (
        <>

            <div className="goal-details-page">

                <div className="goal-header">

                    <div className="goal-header-left">

                        <button className="back-btn">
                            <ArrowLeft size={20} />
                        </button>

                        <div className="goal-icon" style={{ background: iconObject.color }} >
                            <Icon size={40} style={{ color: "white" }} />
                        </div>

                        <div className="goal-info">

                            <div className="goal-title-row">

                                <h1>{goal.title}</h1>

                                <span className="priority-badge">
                                    {goal.priority}
                                </span>

                            </div>

                            <p>
                                {goal.description}
                            </p>

                            <div className="goal-date">

                                <Calendar size={16} />

                                Target : {goal.duedate}

                            </div>

                        </div>

                    </div>

                    <div className="goal-header-right">

                        <button className="edit-btn" onClick={() => setShowGoalEdit(true)}>

                            <Pencil size={16} />

                            Edit Goal

                        </button>

                        <button className="menu-btn">

                            <MoreVertical size={20} />

                        </button>

                    </div>

                </div>


                {/* Progress */}

                <div className="progress-section">

                    <div className="progress-text">

                        <span>
                            <strong>{progress}%</strong> Complete
                        </span>

                        <span>
                            2 / 5 Milestones  add you custom here
                        </span>

                    </div>

                    <GoalCompletionRate />

                </div>


                {/* Milestones */}

                <div className="milestone-header">

                    <h2>
                        Milestones
                    </h2>

                    <button className="add-btn" onClick={() => setShowMileStoneForm(true)}>

                        <Plus size={18} />

                        Add Milestone

                    </button>

                </div>

                <div className="milestone-list">

                    {
                        milestoneData.map((item) => (
                            <MilestoneCard
                                key={item.id}
                                milestone={item}
                            />
                        ))
                    }

                </div>


            </div>
            {
                showGoalEdit && <div className="goaleditform-overlay"> 
                    <GoalEdit 
                        onClose={() => setShowGoalEdit(false)} 
                    /> 
                </div>
            }

            {
                showMileStoneForm && 
                    <AddMilestoneForm
                        onClose={() => setShowMileStoneForm(false)}
                    />
            }
        </>
    )

}

export default GoalDetails;