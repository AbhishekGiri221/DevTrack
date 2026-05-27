import { FaHome } from "react-icons/fa";
import Logo from "../logo/Logo";
import './Optionbar.css';
import ThemeButton from  '../Buttons/ThemeButton';

import { HiClipboard } from "react-icons/hi";

import {
    LuLogOut,
    LuSettings,
    LuUserRound,
    LuNotebookText,
    LuTarget
} from "react-icons/lu";

import { NavLink } from "react-router-dom";

function Optionbar() {

    const getNavClass = ({ isActive }) =>
        isActive
            ? "options-style active-option"
            : "options-style";

    return (

        <div className="option-container">

            <Logo />

            <div className="list-logo-container">

                <div className="option-list-container">

                    <ul className="option-ul-list">

                        <li>
                            <NavLink to="/app/dashboard" className={getNavClass}>
                                <FaHome size={22} />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/tasks" className={getNavClass}>
                                <HiClipboard size={22} />
                                <span>Tasks</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/goals" className={getNavClass}>
                                <LuTarget size={22} />
                                <span>Goals</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/notes" className={getNavClass}>
                                <LuNotebookText size={22} />
                                <span>Notes</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/profiles" className={getNavClass}>
                                <LuUserRound size={22} />
                                <span>Profiles</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/app/settings" className={getNavClass}>
                                <LuSettings size={22} />
                                <span>Settings</span>
                            </NavLink>
                        </li>

                    </ul>

                </div>

                <div className="logout-container">

                    <NavLink to="/logout" className={getNavClass}>
                        <LuLogOut size={22} />
                        <span>Logout</span>
                    </NavLink>


                </div>

            </div>

        </div>
    )
}

export default Optionbar;