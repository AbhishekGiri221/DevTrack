import AddNotesButton from '../../../components/Buttons/AddNotesButton';
import SearchBar from '../../../components/Buttons/SearchBar';
import './Notes.css';
import NotesCard from './NotesCard';

function Notes() {
    return (
        <>
            <div className="notes-wrapper-container">
                <div className="notes-top-container">
                    <h1> My Notes </h1>

                    <div className="notes-left-section">
                        <SearchBar placeholder={"Search Notes ...."} />
                        <AddNotesButton />
                    </div>

                </div>

                <div className="notes-bottom-container">
                    {/* <span>Add Notes to get started..</span> */}
                    <div className="notes-card-container">
                        <NotesCard />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Notes;