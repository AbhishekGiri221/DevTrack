import { createContext, useState } from "react";


export const completionRateContext = createContext(); // empty space

function GoalCompletionRateProvider({children}) {
    const [progress, setProgress] = useState(20);

    return(
        <completionRateContext.Provider value={{progress, setProgress}}>
            {children}
        </completionRateContext.Provider>
    )
}

export default GoalCompletionRateProvider;