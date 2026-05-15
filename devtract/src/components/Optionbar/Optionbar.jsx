import { FaHome } from "react-icons/fa";
import Logo from "../logo/Logo";
import './Optionbar.css';
import { HiClipboard } from "react-icons/hi";
import { LuLogOut, LuSettings, LuUserRound, LuNotebookText, LuTarget } from "react-icons/lu";

function Optionbar() {
    return (
        <>
            <div className="option-container">
                <Logo />
                <div className="list-logo-container">
                    <div className="option-list-container">
                        <ul className="option-ul-list">
                            <li className="options-style"><FaHome size={25} />Dashboard</li>
                            <li className="options-style"><HiClipboard size={25} />Tasks</li>
                            <li className="options-style"><LuTarget size={25} />Goals</li>
                            <li className="options-style"><LuNotebookText size={25} /> Notes</li>
                            <li className="options-style"><LuUserRound size={25} />Profiles</li>
                            <li className="options-style"><LuSettings size={25} />Settings</li>
                        </ul>
                    </div>
                    <div className="logout-container">
                        <a className="options-style"> <LuLogOut size={25} />Logout</a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Optionbar;