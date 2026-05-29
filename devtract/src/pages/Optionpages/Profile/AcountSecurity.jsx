import { Check, CheckCircle, Lock, Shield } from "lucide-react";
import './AcountSecurity.css';

function AcountSecurity() {
    return (
        <>
            <div className="wraper-container">

                <div className="heading-container">
                    <h4> Account & Security </h4>
                </div>

                <div className="options-container">
                    <div className="option-list">
                        <div className="logo">
                            <Lock size={20} color="var(--primary-color)" />
                        </div>

                        <div className="option">
                            <span>Password</span>
                             <button className="change-password-button">Change Password</button>
                        </div>
                    </div>


                    <div className="option-list">
                        <div className="logo">
                            <Shield size={20} color="var(--primary-color)" />
                        </div>

                        <div className="option">
                            <span>Account Security</span>
                             <button className="Secure-button"> <CheckCircle size={15} color="green" /> Secure </button>
                        </div>
                    </div>


                    
                </div>

            </div>
        </>
    )
}

export default AcountSecurity;