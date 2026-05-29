import './ProfilePic.css';
import sampleimg from '../../assets/images/profile-image.png';

function ProfilePic() {
    return (
        <>
            <img
                className='profile-image'
                src={sampleimg}
                alt="profileimg"
            />
        </>
    )
}

export default ProfilePic;