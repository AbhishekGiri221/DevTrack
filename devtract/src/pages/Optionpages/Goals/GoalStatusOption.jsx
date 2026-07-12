function GoalStatusOption({goalFormData, setGoalFormData, goalStatus}) {
    return(
            <select
                name="currentStatus"
                value={goalFormData.currentStatus}
                onChange={(e)=> setGoalFormData((prev)=> ({...prev, currentStatus: e.target.value}))}
                className="goal-status-field"
            >
                {
                    goalStatus.map((status)=>{
                        // the value written in option goes to select as e.target.value if we
                            // have not written here anything then innertext is sent as value
                        return(<option key={status} value={status}>{status}</option>) 
                    })
                }
            </select>
    )
}

export default GoalStatusOption;