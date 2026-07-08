import './MainpageNavbar.css';
import ThemeButton from '../Buttons/ThemeButton';
import Profilepic from '../Profilepic/ProfilePic';
import { Bell } from 'lucide-react';

function MainpageNavbar() {
    return (
        <>
            <div className="secondnavbar-container">
                <button className="icon-button">
                    <Bell size={22} />
                </button>

                <ThemeButton />

                <div className="profile-photo">
                    <Profilepic className="proile-pic" />
                </div>
            </div>

        </>
    )
}

export default MainpageNavbar;