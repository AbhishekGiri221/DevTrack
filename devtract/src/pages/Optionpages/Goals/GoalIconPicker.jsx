// GoalIconPicker.jsx
import "./GoalIconPicker.css";
import { icons } from "./goalIcon";
function GoalIconPicker({ selectedIcon, setSelectedIcon }) {

    return (
        <>
            <div className="icon-grid">
                {
                    icons.map((items) => {
                        const Icon = items.icon;
                        return (
                            <button
                                type="button"
                                onClick={() => setSelectedIcon(items.name)}
                                className={selectedIcon === items.name ? "icon-option active" : "icon-option"}
                                style={{
                                    color: selectedIcon === items.name ? "white" : items.color
                                }}
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