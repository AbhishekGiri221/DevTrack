import { CircleCheck, Target, TrendingUp, PieChart } from 'lucide-react';
import './GoalDashboardCard.css';
import { BiColor } from 'react-icons/bi';

function GoalDashboardCard() {
    const cardDetails = [
        {
            name: "Total Goals",
            icon: Target,
            count: 4,
            subtext: "All time",
            color: "#7C3AED"
        },

        {
            name: "Active Goals",
            icon: TrendingUp,
            count: 4,
            subtext: "In progress",
            color : "green",
        },

        {
            name: "Completed Goals",
            icon: CircleCheck,
            count: 4,
            subtext: "Completed",
                        color: "#ae97d6ff"

        },

        {
            name: "Overall Progress",
            icon: PieChart,
            count: 4,
            subtext: "Keep it up!",
            color: "#3a5eedff",

        }
    ]
    return (
        <>
                {cardDetails.map((card,index)=>{
                    const Icon = card.icon;

                    return(
                        <div className="goal-cards" key={index}>
                            <div className="icon">
                                {/* component must start with capital letter */}
                                <Icon size ={60} style={{color: `${card.color}`}}/>
                            </div>
                            <div className="text">
                                <span>{card.name}</span>
                                <h1>{card.count}</h1>
                                <span>{card.subtext}</span>
                            </div>
                        </div>
                    )

                })
                
                }
        </>
    )
}

export default GoalDashboardCard;