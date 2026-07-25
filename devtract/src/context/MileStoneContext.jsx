import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getToken } from "../utils/auth";
import { useNavigate, useParams } from "react-router-dom";

export const MileStoneDataContext = createContext();

function MileStoneContext({children}) {
    const {id} = useParams();
    const [milestoneData, setMilestoneData] = useState([]);
    const navigate = useNavigate();
    const token = getToken();


    useEffect(()=>{
        getMileStoneData();
    },[id]);

    async function getMileStoneData() {
        try {
            const response = await axios.get(`http://localhost:3000/app/goals/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
    
            setMilestoneData((prev) => ( prev.id === response.data.id ? response.data : prev));
        } catch (error) {
            if(error?.response?.status === 401){
                localStorage.removeItem("token");
                navigate("/login");
            }

            console.log(error.message);
        }

    }
    return (
        <MileStoneDataContext.Provider value={{getMileStoneData, milestoneData, setMilestoneData}}>
            {children}
        </MileStoneDataContext.Provider>
    )
}

export default MileStoneContext;