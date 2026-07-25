import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth";

export const GoalContext = createContext();

function GoalProvider({ children }) {

    const [goalList, setGoalList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getGoals();
    }, [navigate]);

    async function getGoals() {

        const token = getToken();
        try {
            const response = await axios.get("http://localhost:3000/app/goals", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setGoalList(response.data);

        } catch (error) {
            if (error?.response?.status === 401) {
                localStorage.removeItem("token");
                navigate("/login");
            }

            console.log(error);
        }
    }



    async function updateGoals(formData) {
        try {
            const token = getToken();

            const response = await axios.patch(`http://localhost:3000/app/goals/${formData.id}`, formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );


            setGoalList(prev => prev.map((item) => item.goal.id === response.data.goal.id ? response.data : item));
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <GoalContext.Provider
            value={{ goalList, setGoalList, updateGoals, getGoals }}
        >
            {children}
        </GoalContext.Provider>
    )
}

export default GoalProvider;