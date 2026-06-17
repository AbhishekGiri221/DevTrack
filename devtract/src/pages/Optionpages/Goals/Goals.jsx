import { FaSearch } from "react-icons/fa";
import './Goals.css';
import AddGoalsButton from "../../../components/Buttons/AddGoalsButton";
import GoalDashboardCard from "./GoalDashboardCard";
import GoalFilter from "./GoalFilter";
import GoalsList from "./GoalsList";
import GoalForm from "./GoalForm";
import { useState } from "react";

function Goals() {
    const [showGoalForm, setShowGoalForm] = useState(false);
    return (
        <>
            <div className="goals-wrapper-container">
                <div className="goal-heading-container">
                    <div className="goal-left-head">
                        <h1>Goals</h1>
                        <span>Track you goals and achieve more</span>
                    </div>
                    <div className="goal-right-head">
                        <div className="search-container">
                            <FaSearch size={15}/>
                            <input type="text" placeholder="Search goals..." />
                        </div>
                            <AddGoalsButton 
                            onClick={()=>setShowGoalForm((prev)=>!prev)}/>
                    </div>
                </div>

                { showGoalForm && <GoalForm onClose={()=>setShowGoalForm((prev)=> !prev)}/> }

                <div className="goals-dashboard-card-container">
                    <GoalDashboardCard />
                </div>

                <div className="goals-bottom-container">
                    <GoalFilter />
                    <GoalsList />
                </div>
            </div>
        </>
    )
}

export default Goals;