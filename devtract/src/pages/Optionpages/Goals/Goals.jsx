import './Goals.css';
import AddGoalsButton from "../../../components/Buttons/AddGoalsButton";
import GoalDashboardCard from "./GoalDashboardCard";
import GoalFilter from "./GoalFilter";
import GoalsList from "./GoalsList";
import GoalForm from "./GoalForm";
import { useContext, useEffect, useState } from "react";
import SearchBar from "../../../components/Buttons/SearchBar";
import { getToken } from '../../../utils/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoalContext } from '../../../context/GoalContext';

function Goals() {
    const [showGoalForm, setShowGoalForm] = useState(false);
    const {goalList, setGoalList} = useContext(GoalContext);
    const goalStatus = ["completed","inprogress","hold"];


    return (
        <>
            <div className="goals-wrapper-container">
                <div className="goal-heading-container">
                    <div className="goal-left-head">
                        <h1>Goals</h1>
                        <span>Track you goals and achieve more</span>
                    </div>
                    <div className="goal-right-head">
                        <SearchBar placeholder={"Search Goals ..."} />
                        <AddGoalsButton
                            onClick={() => setShowGoalForm((prev) => !prev)} />
                    </div>
                </div>

                {showGoalForm && <GoalForm goalStatus={goalStatus} setGoalList={setGoalList} onClose={() => setShowGoalForm((prev) => !prev)} />}

                <div className="goals-dashboard-card-container">
                    <GoalDashboardCard />
                </div>

                <div className="goals-bottom-container">
                    <GoalFilter />
                    <GoalsList goalList={goalList} />
                </div>
            </div>
        </>
    )
}

export default Goals;