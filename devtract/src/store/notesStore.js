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
    )
}));

export default useNotesList;