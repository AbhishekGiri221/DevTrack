import './ProfileCard.css';
import ProfilePic from '../../../components/Profilepic/ProfilePic'
import Date from '../../../components/Dates/Date';
import { Calendar, Camera } from 'lucide-react';

function ProfileCard() {
    return (
        <>
            <div className="profile-image-wrapper">

                <div className="profile-img-container">
                    <ProfilePic />
                </div>

                <button className='profile-upload-button'>
                    <Camera className='camera-icon' size={18} />
                </button>

            </div>

            <h2>Abhishek Giri</h2>
            <span className='job-title'>Full Stack Developer</span>
            <span className='email-text'>ag349628@gmail.com</span>

            <div className="joined-Date-container">
                <Calendar size={20} color="var(--primary-color)" />
                <div className="date-container">
                    <span className='member-title'>Member since</span>
                    <Date />
                </div>
            </div>
        </>
    )
}

export default ProfileCard