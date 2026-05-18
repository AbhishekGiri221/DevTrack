import { useState } from 'react';
import Optionbar from '../components/Optionbar/Optionbar';
import './Mainpage.css';
import { Outlet } from 'react-router-dom';

function Mainpage() {

    const [selectPage, setSelectpage] = useState("dashboard");
    return (
        <>
            <div className="Mainpage-container">
                <div className="left-section">
                    <Optionbar/>
                </div>

                <div className="right-section">
                    <Outlet />
                </div>
            </div>
        </>
    )
}


