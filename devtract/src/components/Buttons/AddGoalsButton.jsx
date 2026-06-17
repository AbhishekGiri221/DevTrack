import './AddGoalsButton.css';

function AddGoalsButton({onClick}) {
    return(
        <>
            <button
                className={`add-goals-button`}
                // type={type}
                onClick={onClick}
            >
                + New Goals
            </button>
        </>
    )
}

export default AddGoalsButton