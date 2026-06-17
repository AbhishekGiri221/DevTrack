import { FaReact } from 'react-icons/fa';
import './GoalsList.css';

function GoalsList(params) {
    // const item = localStorage.getItem(goal);
    const date = new Date().toISOString().split("T")[0];
    return (
        <>
            <div className="goal-list-container">
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={40} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
                <div className="goal-list">
                    <div className="list-left-section">
                        <div className="goal-list-logo"> <FaReact size={60} /></div>
                        <div className="goal-list-content">
                            <h2>Become react developer</h2>
                            <span>master react and build amazing projects</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="goal-completion-rate">
                        <h1>completion rate</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoalsList;