
import './GoalCompletionRate.css';

function GoalCompletionRate({progress}) {

    return (
        <>
            <div className="completion-progress-container">
                <div className="completion-progress-track">
                    <div
                        className="completion-rate"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <span className="completion-percentage">
                    {progress}%
                </span>
            </div>
        </>
    )
}

export default GoalCompletionRate;