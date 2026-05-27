import MainpageNavbar from '../components/Navbar/MainpageNavbar';
import Optionbar from '../components/Optionbar/Optionbar';
import './Mainpage.css';
import { Outlet } from 'react-router-dom';

function Mainpage() {

    return (
        <>
            <div className="Mainpage-container">
                <div className="left-section">
                    <Optionbar/>
                </div>

                <div className="right-section">
                    <MainpageNavbar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export default Mainpage;
