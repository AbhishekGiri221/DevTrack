import Logoimg from '/Users/abhishekgiri/Documents/devtract/src/assets/images/logo.png';
import './Logo.css';

function Logo({className}) {
    return (
        <>
            <div className='logo-div'>
                <a href='/' className='logo-container'>
                    <img src={Logoimg} alt="DevTrack" className={`logo-img ${className}`}  />
                </a>
            </div>

        </>
    )
}

export default Logo;