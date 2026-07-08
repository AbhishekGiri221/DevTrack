import AddtaskForm from '../Tasks/AddtaskForm';
import TaskList from '../Tasks/TaskList';
import './Dashboard.css';
import ViewTask from '../Tasks/ViewTask';

function Dashboard({ getTask, taskToView, setTaskToView, viewTaskDetails, setViewTaskDetails, taskToedit, setTaskToedit, setShowForm, showForm, task, setTask, activeFilter, setMode, mode }) {
    async function getDashboardDetails() {
        // const taskList = await 
    }


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
                        <TaskList getTask={getTask} setTaskToView={setTaskToView} setViewTaskDetails={setViewTaskDetails} task={task} setTask={setTask} activeFilter={activeFilter} setMode={setMode} setTaskToedit={setTaskToedit} setShowForm={setShowForm} />
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

                {
                    showForm && (
                        <div className="modal-overlay">
                            <AddtaskForm mode={mode} setTask={setTask} onClose={() => setShowForm(!showForm)} taskToedit={taskToedit} />

                        </div>
                    )
                }

                {
                    viewTaskDetails && (
                        <div className="modal-overlay">
                            <ViewTask task={taskToView} onClose={() => setViewTaskDetails(false)} />                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Dashboard;