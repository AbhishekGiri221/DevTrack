import './GetstartedButton.css';
import { useNavigate } from 'react-router-dom';
function Getstartedbutton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }
    return (
        <>
            <button className='Getstartedbutton' onClick={handleClick}>Get Started</button>

        </>
    )
}

export default Getstartedbutton;