import { useEffect, useState } from "react";
import AddNotesButton from "../../../components/Buttons/AddNotesButton";
import SearchBar from "../../../components/Buttons/SearchBar";
import "./Notes.css";
import NotesCard from "./NotesCard";
import AddNotesForm from "./AddNotesForm";
import useNotesList from "../../../store/notesStore";
import { getToken } from "../../../utils/auth";
import axios from "axios";
function Notes() {
    const notesList = useNotesList(state => state.notesList);
    const setNotes = useNotesList(state => state.setNotes);

    useEffect(()=>{
        async function fetchNotes() {
        try {
            const token = getToken();

            const response = await axios.get(
                "http://localhost:3000/app/notes",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setNotes(response.data);

        } catch (error) {
            console.log(error.message);
        }
    }
    fetchNotes();
}, []);


    async function handleDelete(id){
        try {
            const token = getToken();

            const response = await axios.delete(`http://localhost:3000/app/notes/${id}`,{
                    headers : {
                        Authorization: `Bearer ${token}`
                    }
            });

            alert(response.data);
            setNotes(notesList.filter((note) => note.id !== id));


        } catch (error) {
            console.log(error.message);
        }
    }

    function handleEdit(note){
        setShowNotesForm(true);
        setSelectedNotes(note);
    }

    function handleAddNotes(){
        setSelectedNotes(null);
        setShowNotesForm(true);
    }

    const [showNotesForm, setShowNotesForm] = useState(false);
    const [selectedNotes, setSelectedNotes] = useState();
    return (
        <div className="notes-page">

            <div className="notes-header">

                <div>
                    <h1>My Notes</h1>
                    <p>Capture ideas, reminders and important information.</p>
                </div>

                <div className="notes-actions">
                    <SearchBar placeholder="Search notes..." />
                    <AddNotesButton 
                        onClick = {handleAddNotes}
                    />
                </div>

            </div>

            <div className="notes-grid">
                <NotesCard handleDelete = {handleDelete} handleEdit = {handleEdit}/>
            </div>

            {
                showNotesForm && <AddNotesForm  onClose = {() => setShowNotesForm(false)} notes = {selectedNotes} 
                                /> 
            }
        </div>

    );
}

export default Notes;