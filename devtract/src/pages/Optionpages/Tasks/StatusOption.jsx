function StatusOption({ taskStatus, setTaskStatus, status }) {
    return (
        <>
            <select
                name="status"
                className='status-option-field'
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
            >
                {
                    status.map((item) => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        );
                    })
                }
            </select>
        </>
    )
}

export default StatusOption;