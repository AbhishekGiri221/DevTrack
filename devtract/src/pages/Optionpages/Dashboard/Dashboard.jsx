import TaskList from '../Tasks/TaskList';
import './Dashboard.css';
function Dashboard({task}) {
    return (
        <>
            <div className="Dashboard-container">
                <div className="heading-container">
                    <h2> Good morning, Abhishek Giri! 👋 </h2>
                    <p className='dashboard-text'> Here's what's happening today.</p>
                </div>

                <div className="stats-container">
                    <div className="task-stats stats">
                        <span className='task-number stats-completion-rate'>{task.length}</span>
                        <span className='stats-name'>Tasks</span>
                    </div>
                    <div className="goals-stats stats">
                        <span className='goal-number stats-completion-rate'>12</span>
                        <span className='stats-name'>Goals</span>
                    </div>
                    <div className="streak-stats stats">
                        <span className='streak-number stats-completion-rate'>12</span>
                        <span className='stats-name'>Day Streak</span>
                    </div>
                    <div className="productivity-stats stats">
                        <span className='productivity-percentage stats-completion-rate'>12</span>
                        <span className='stats-name'>Productivity</span>
                    </div>
                </div>

                <div className="bottom-dashboard-container">
                    <div className="task-container">
                        <h3>My Tasks</h3>
                        <TaskList task={task}/>
                    </div>

                    <div className="motivation-container">
                        <div className="motivation-heading-container">
                            <h2 className='motivation-heading'>Motivation</h2>
                        </div>

                        <div className="motivation-quote">
                            <p>"Discipline today leads to sucess tomorrow."</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;