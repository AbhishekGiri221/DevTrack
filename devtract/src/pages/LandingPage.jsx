import landingpageimg from '../assets/images/landingpage.png';
import './LandingPage.css';
import GetstartedButton from '../components/Buttons/GetstartedButton';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    
    return (
        <>
            <div className="landingpagecontainer">
                
                <div className='leftsection'>
                    <h1 className='titletextheading'> Track. Plan.</h1>
                    <h1 className='titletextheading purpleheadingtext'>Acheive.</h1>
                    <p className='subtitletext'>
                        Your all-in-one productivity dashboard to managet to tasks,
                        goals, notes and more.
                    </p>

                    <div className='buttons-container'>
                        <GetstartedButton/>
                        <button className='learnmorebutton'>Learn More</button>
                    </div>
                </div>

                <div className='rightsection'>
                    <img className="landingpageimg" src={landingpageimg} alt="landingpageimg" />
                </div>

            </div>
        </>
    )
}

export default LandingPage;