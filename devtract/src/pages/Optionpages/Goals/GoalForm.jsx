import { FiX } from 'react-icons/fi';
import './GoalForm.css';
import { useState } from 'react';
import GoalIconPicker from './GoalIconPicker';
import {getToken} from '../../../utils/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GoalForm({setGoalList, onClose }) {

    const[goalFormData, setGoalFormData] = useState({
        selectedIcon:"",
        goalTitle:"",
        goalDescription:"",
        targetDate:"",
        goalPriority:"",
    })

    const navigate = useNavigate();


    async function handleSubmit(e){
        e.preventDefault();
        const token = getToken();
        try {
            const response = await axios.post("http://localhost:3000/app/goals",
                goalFormData,
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(`the response is ${JSON.stringify(response.data)}`);
            setGoalList(response.data);
            onClose();

        } catch (error) {
            if(error?.response?.status === 401){
                localStorage.removeItem("token");
                navigate("/login");
            }
            alert(error?.message);
        }   
    }

    function handleValue(e){
        setGoalFormData((prev)=> ({...prev, [e.target.name] : e.target.value}));
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
                                    selectedIcon={goalFormData.selectedIcon}
                                    setSelectedIcon={(value)=> setGoalFormData((prev)=> ({...prev, selectedIcon : value}))}
                                />                            </div>
                            <div className="goal-title flex-property field-gap">
                                <span>Goal title</span>
                                <input
                                    name='goalTitle'
                                    type='text'
                                    value={goalFormData.goalTitle}
                                    placeholder='Enter your goal'
                                    onChange={handleValue}
                                    className='goal-title-input-field'
                                />
                            </div>

                            <div className="goal-description flex-property field-gap ">
                                <span>Description</span>
                                <textarea
                                    name='goalDescription'
                                    placeholder='Describe your goal'
                                    value={goalFormData.goalDescription}
                                    onChange={handleValue}
                                    className='goal-description-input-field'
                                />
                            </div>

                            <div className="goal-date-prority-container">

                                <div className="goal-target-date flex-property field-gap">

                                    <span>Target Date</span>
                                    <input
                                        name='targetDate'
                                        type="date"
                                        min={new Date().toISOString().split("T")[0]}
                                        value={goalFormData.targetDate}
                                        onChange={handleValue}
                                        className='target-date-input-field'
                                    />
                                </div>

                                <div className="priority-cotainer flex-property field-gap">
                                    <span>Priority</span>
                                    <select
                                        name='goalPriority'
                                        value={goalFormData.goalPriority}
                                        onChange={handleValue}
                                        className='goal-priority-field'
                                    >
                                        <option value={"Medium"}>Medium</option>
                                        <option value={"High"}>High</option>
                                        <option value={"Low"}>Low</option>
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