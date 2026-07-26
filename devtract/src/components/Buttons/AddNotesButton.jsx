import '../Buttons/AddNotesButton.css';

function AddNotesButton({onClick}) {
    return (
        <button className="add-notes-button"
            onClick={onClick}
        >
            + New Note
        </button>
    );
}

export default AddNotesButton;