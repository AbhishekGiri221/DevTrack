import { FiX } from 'react-icons/fi';
import './GoalForm.css';
import { useState } from 'react';
import GoalIconPicker from './GoalIconPicker';

function GoalForm({ onClose }) {
    const [goalTitle, setGoalTitle] = useState("");
    const [goalDescription, setGoalDescription] = useState("");
    const [targetDate, setTargetdate] = useState("");
    const [goalPriority, setGoalPriority] = useState("Medium");
    const [selectedIcon, setSelectedIcon] = useState("");

    function handleSubmit(){
        const content = {
            id: Date.now(),
            goalTitle,
            goalDescription,
            targetDate,
            goalPriority,
            selectedIcon,
        }

        const existingGoals = localStorage.getItem("goal") || [];
        
        existingGoals.push(content);

        localStorage.setItem("goal",JSON.stringify(content));

        onClose();
    }

    return (
        <>
            <div className="overlay-layer">
                <div className='goal-input-form flex-property'>
                    <div className="goal-form-heading">
                        <div className="left-head-section field-gap">
                            <h2>Add New Goal</h2>
                            <span>Define your goal and break it down</span>
                        </div>
                        <div className="right-head-section">
                            <FiX
                                className='cancelButton'
                                size={30}
                                onClick={onClose}
                            />
                        </div>
                    </div>
                    <div className="form-container flex-property" >
                        <form className="goal-form flex-property" onSubmit={handleSubmit}>
                            <div className="goal-logo">
                                <span>Select Icon</span>

                                <GoalIconPicker
                                    selectedIcon={selectedIcon}
                                    setSelectedIcon={setSelectedIcon}
                                />                            </div>
                            <div className="goal-title flex-property field-gap">
                                <span>Goal title</span>
                                <input
                                    type='text'
                                    value={goalTitle}
                                    placeholder='Enter your goal'
                                    onChange={(e) => setGoalTitle(e.target.value)}
                                    className='goal-title-input-field'
                                />
                            </div>

                            <div className="goal-description flex-property field-gap ">
                                <span>Description</span>
                                <textarea
                                    placeholder='Describe your goal'
                                    value={goalDescription}
                                    onChange={(e) => setGoalDescription(e.target.value)}
                                    className='goal-description-input-field'
                                />
                            </div>

                            <div className="goal-date-prority-container">

                                <div className="goal-target-date flex-property field-gap">

                                    <span>Target Date</span>
                                    <input
                                        type="date"
                                        min={new Date().toISOString().split("T")[0]}
                                        value={targetDate}
                                        onChange={(e) => setTargetdate(e.target.value)}
                                        className='target-date-input-field'
                                    />
                                </div>

                                <div className="priority-cotainer flex-property field-gap">
                                    <span>Priority</span>
                                    <select
                                        value={goalPriority}
                                        onChange={(e) => setGoalPriority(e.target.value)}
                                        className='goal-priority-field'
                                    >
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="goal-form-button-container">
                                <button type='button' className='cancel-goal-button'>Cancel</button>
                                <button className='add-goal-button'>Create Goal</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </>
    )
}

export default GoalForm;