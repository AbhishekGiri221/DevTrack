import AcountSecurity from './AcountSecurity';
import PersonalInfromation from './PersonalInformation';
import './Profile.css';
import ProfileCard from './ProfileCard';
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
                        <ProfileCard />
                
                    </div>

                    {/* right-side */}
                    <div className="right-container">
                        <div className="right-top-container">
                            <PersonalInfromation />
                        </div>

                        <div className="right-bottom-container">
                            <AcountSecurity />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Profile;