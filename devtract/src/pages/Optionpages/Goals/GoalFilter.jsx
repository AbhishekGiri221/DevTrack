import './GoalFilter.css';
import { useState } from 'react';
function GoalFilter() {
    const filters = ["All Goals", "Active", "Completed", "On Hold"];
    const [activeFilter, setActiveFilter] = useState("All Goals");
    return (
        <>
            <div className="filters">
                {filters.map((filter,index) => {
                    return (
                        <button
                            key={index}
                            className={activeFilter === filter ? "active" : "nonactive"}
                            onClick={()=>setActiveFilter(filter)}
                        >

                            {filter}

                        </button>
                    )
                })
                }
            </div>
        </>
    )
}

export default GoalFilter;