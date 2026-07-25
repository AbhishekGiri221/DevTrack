import AddNotesButton from "../../../components/Buttons/AddNotesButton";
import SearchBar from "../../../components/Buttons/SearchBar";
import "./Notes.css";
import NotesCard from "./NotesCard";

function Notes() {
    return (
        <div className="notes-page">

            <div className="notes-header">

                <div>
                    <h1>My Notes</h1>
                    <p>Capture ideas, reminders and important information.</p>
                </div>

                <div className="notes-actions">
                    <SearchBar placeholder="Search notes..." />
                    <AddNotesButton />
                </div>

            </div>

            <div className="notes-grid">
                <NotesCard />
            </div>

        </div>
    );
}

export default Notes;