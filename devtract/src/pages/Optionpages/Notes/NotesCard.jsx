import "./NotesCard.css";
import { CalendarDays } from "lucide-react";

const notes = [
    {
        id: 1,
        title: "Business Ideas",
        description:
            "Build an AI-powered portfolio builder for developers with resume generation.",
        date: "25 Jul 2026"
    },
    {
        id: 2,
        title: "React Revision",
        description:
            "Learn Context API, useReducer, memoization and React Router v7.",
        date: "24 Jul 2026"
    },
    {
        id: 3,
        title: "Workout Plan",
        description:
            "Chest + Triceps on Monday. Cardio 20 mins after workout.",
        date: "23 Jul 2026"
    },
    {
        id: 4,
        title: "Shopping",
        description:
            "Keyboard, Mouse Pad, SSD and Protein Oats.",
        date: "22 Jul 2026"
    },
    {
        id: 5,
        title: "Project Ideas",
        description:
            "Expense Tracker, Habit Tracker, URL Shortener, Notes App.",
        date: "20 Jul 2026"
    },
    {
        id: 6,
        title: "Meeting Notes",
        description:
            "Complete authentication and deploy backend before Sunday.",
        date: "19 Jul 2026"
    }
];

function NotesCard() {
    return (
        <>
            {notes.map(note => (
                <div className="note-card" key={note.id}>

                    <div className="note-card-top">
                        <h3>{note.title}</h3>
                    </div>

                    <p>{note.description}</p>

                    <div className="note-card-footer">
                        <CalendarDays size={15} />
                        <span>{note.date}</span>
                    </div>

                </div>
            ))}
        </>
    );
}

export default NotesCard;