// GoalIconPicker.jsx

import {
    Code,
    BookOpen,
    Dumbbell,
    Wallet,
    Briefcase,
    Heart,
    Plane,
    GraduationCap,
    Trophy,
    Target
} from "lucide-react";

import "./GoalIconPicker.css";

function GoalIconPicker({ selectedIcon, setSelectedIcon }) {

    const icons = [
        { name: "Code", icon: Code },
        { name: "BookOpen", icon: BookOpen },
        { name: "Dumbbell", icon: Dumbbell },
        { name: "Wallet", icon: Wallet },
        { name: "Briefcase", icon: Briefcase },
        { name: "Heart", icon: Heart },
        { name: "Plane", icon: Plane },
        { name: "GraduationCap", icon: GraduationCap },
        { name: "Trophy", icon: Trophy },
        { name: "Target", icon: Target }
    ];

    return (
        <>
            <div className="icon-grid">
                {
                    icons.map((items) => {
                        const Icon = items.icon;
                        return (
                            <button
                                type="button"
                                value={selectedIcon}
                                onClick={()=>setSelectedIcon(items.name)}
                                className={selectedIcon === items.name ? "icon-option active" : "icon-option"}
                            >
                                <Icon size={20} />
                            </button>

                        )
                    })
                }
            </div>
        </>
    );
}

export default GoalIconPicker;