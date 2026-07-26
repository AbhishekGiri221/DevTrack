import { FiX } from "react-icons/fi";
import { useState } from "react";
import { getToken } from "../../../utils/auth";
import "./AddNotesForm.css";
import useNotesList from '../../../store/notesStore';
import axios from "axios";
function AddNotesForm({ onClose }) {

    const [noteData, setNoteData] = useState({
        title: "",
        description: "",
        category: "Personal"
    });

    const addNotes = useNotesList(state => state.addNotes);

    function handleChange(e) {
        setNoteData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (
            !noteData.title.trim() ||
            !noteData.description.trim()
        ) {
            alert("Please fill all fields.");
            return;
        }

        try {
            const token = getToken();
            const response = await axios.post("http://localhost:3000/app/notes",noteData,{
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
            });

            addNotes(response.data);
            alert("Notes added sucessfully");
        } catch (error) {
            console.log(error.message);
        }  

        onClose();
    }

    return (
        <div className="note-overlay">

            <div className="note-form">

                <div className="note-header">

                    <div>
                        <h2>Create Note</h2>
                        <p>Capture your thoughts quickly.</p>
                    </div>

                    <button
                        className="close-btn"
                        type="button"
                        onClick={onClose}
                    >
                        <FiX size={22} 
                            onClick={onClose}
                        />
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="note-group">

                        <label>Title</label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter note title"
                            value={noteData.title}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="note-group">

                        <label>Category</label>

                        <select
                            name="category"
                            value={noteData.category}
                            onChange={handleChange}
                        >
                            <option>Personal</option>
                            <option>Work</option>
                            <option>Study</option>
                            <option>Ideas</option>
                            <option>Important</option>
                        </select>

                    </div>

                    <div className="note-group">

                        <label>Description</label>

                        <textarea
                            rows="8"
                            name="description"
                            placeholder="Write your note..."
                            value={noteData.description}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="note-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save Note
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddNotesForm;