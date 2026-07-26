import { create } from "zustand";

const useNotesList = create((set) => ({
    notesList: [],

    addNotes: (notes) => 
        set((state)=> (
                {notesList : [...state.notesList ,notes]}
            )
        ),
    
    setNotes: (notes) =>
        set((state) => (
            {notesList : notes}
        )
    ),

    updateNotes: (updatedNotes)=>
                    set((state) => ({
                        notesList: state.notesList.map((note)=> note.id !== updatedNotes.id ? note : updatedNotes)
                    }))
}));

export default useNotesList;