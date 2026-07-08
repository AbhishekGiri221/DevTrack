import { Plus } from 'lucide-react';
import './AddGoalsButton.css';

function AddGoalsButton({onClick}) {
    return(
        <>
            <button
                className={`add-goals-button`}
                // type={type}
                onClick={onClick}
            >
                <Plus size={18}/> New Goals
            </button>
        </>
    )
}

export default AddGoalsButton