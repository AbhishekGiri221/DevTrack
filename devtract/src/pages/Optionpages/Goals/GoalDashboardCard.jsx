import { CircleCheck, Target, TrendingUp, PieChart } from 'lucide-react';
import './GoalDashboardCard.css';
import { BiColor } from 'react-icons/bi';
import { useContext } from 'react';
import { GoalContext } from '../../../context/GoalContext';

function GoalDashboardCard() {
    const {goalList} = useContext(GoalContext);
    function activeGoalLength() {
        console.log("the goal list is :  ", goalList);
        const active = goalList?.filter((item)=> item.goal.status === "inprogress")
        console.log("the goal active is :  ", active);

        return active?.length;
    }

    function completedGoalLength(){
        const completed = goalList?.filter((item)=> item.goal.status === "completed")

        return completed?.length;
    }

    function overallProgress() {
        if(!goalList?.length) return `${0}%`;

        return `${Math.round((completedGoalLength() / goalList.length) * 100)}%`;
    }

    const cardDetails = [
        {
            title: "Total Goals",
            icon: Target,
            stats: {
                value: goalList?.length ?? 0,
                subtitle: "All Time"
            },
            theme: {
                color: "#7C3AED"
            }
        },
        {
            title: "Active Goals",
            icon: TrendingUp,
            stats: {
                value: activeGoalLength(),
                subtitle: "In Progress"
            },
            theme: {
                color: "#10B981"
            }
        },
        {
            title: "Completed Goals",
            icon: CircleCheck,
            stats: {
                value: completedGoalLength(),
                subtitle: "Completed"
            },
            theme: {
                color: "#A78BFA"
            }
        },
        {
            title: "Overall Progress",
            icon: PieChart,
            stats: {
                value: overallProgress(),
                subtitle: "Keep it up!"
            },
            theme: {
                color: "#3B82F6"
            }
        }
    ];
    return (
        <>
            {cardDetails.map((card, index) => {
                const Icon = card.icon;

                return (
                    <div className="goal-cards" key={index}>
                        <div
                            className="icon"
                            style={{ backgroundColor: `${card.theme.color}20` }}
                        >
                            <Icon
                                size={34}
                                style={{ color: card.theme.color }}
                            />
                        </div>

                        <div className="text">
                            <span>{card.title}</span>
                            <h1>{card.stats.value}</h1>
                            <span>{card.stats.subtitle}</span>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default GoalDashboardCard;