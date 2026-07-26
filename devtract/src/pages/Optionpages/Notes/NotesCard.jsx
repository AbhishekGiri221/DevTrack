import "./NotesCard.css";
import { CalendarDays, Pencil, Trash2 } from "lucide-react";
import useNoteslist from "../../../store/notesStore";


function NotesCard({handleDelete, handleEdit}) {
    const notes = useNoteslist(state => state.notesList);

    return (
        <>
            {notes.map(note => (
                <div className="note-card" key={note.id}>

                    <div className="note-card-top">
                        <h3>{note.title}</h3>

                        <div className="note-action note-edit">
                            <Pencil size={18} 
                                onClick={()=>handleEdit(note)}
                            />
                        </div>
                    </div>

                    <p>{note.description}</p>

                    <div className="note-card-footer">

                        <div className="note-card-date">
                            <CalendarDays size={15} />
                            <span>{note.date}</span>
                        </div>

                        <div className="note-card-actions">

                            <div className="note-action note-delete">
                                <Trash2 size={18} 
                                    onClick={() => handleDelete(note.id)}
                                />
                            </div>

                        </div>

                    </div>

                </div>
            ))}
        </>
    );
}

export default NotesCard;