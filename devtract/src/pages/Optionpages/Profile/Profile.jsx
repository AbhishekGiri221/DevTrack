
import { Calendar, Camera } from 'lucide-react';
import Date from '../../../components/Dates/Date';
import './Profile.css';
import sampleimg from '/Users/abhishekgiri/Documents/devtract/src/assets/images/profile-image.png';
function Profile() {
    return (
        <>
            <div className="profile-container">

                {/* top-container */}
                <div className="top-container">
                    <h2> Profile </h2>
                    <p className='profile-text'> Manage your personal information and account details. </p>
                </div>

                {/* bottom-container */}
                <div className="bottom-container">

                    {/* left-side */}
                    <div className="left-container">

                        <div className="profile-img-container">
                            <img className='profile-image' src={sampleimg} alt="profileimg" />
                        </div>

                        <button
                            className='prfolie-upload-button'
                        // onClick={handleDropdow}
                        >
                            <Camera className='camera-icon' size={18} />
                        </button>

                        <h2>Abhishek Giri</h2>
                        <span className='job-title'>Full Stack Developer</span>
                        <span className='email-text'>ag349628@gmail.com</span>

                        <div className="joined-Date-container">
                            <Calendar size={20} color='purple' />
                            <div className="date-container">
                                <span className='member-title'>Member since</span>
                                <Date />
                            </div>
                        </div>
                    </div>

                    {/* right-side */}
                    <div className="right-container">
                        <div className="right-top-container">

                        </div>

                        <div className="right-bottom-container">

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Profile;