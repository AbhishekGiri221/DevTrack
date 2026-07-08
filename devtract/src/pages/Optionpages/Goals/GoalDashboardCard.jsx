import { CircleCheck, Target, TrendingUp, PieChart } from 'lucide-react';
import './GoalDashboardCard.css';
import { BiColor } from 'react-icons/bi';

function GoalDashboardCard({ goalList }) {
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
                value: 4,
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
                value: 4,
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
                value: "75%",
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