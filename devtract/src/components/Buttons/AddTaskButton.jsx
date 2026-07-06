import './AddTaskButton.css';
function AddTaskButton({
    children,
    onClick,
    setMode,
    setTaskToedit,
    type = "button",
    className

}) {

    function handleFormClick(){
            setMode("create");
            setTaskToedit(null);
            onClick();
    }
    return (
        <>
            <button
                className={`add-task-button ${className}`}
                type={type}
                onClick={handleFormClick}
                
            >
                {children}
            </button>

        </>
    )
}

export default AddTaskButton;