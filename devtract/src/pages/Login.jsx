import './Login.css';
import Logo from '../components/logo/Logo';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
                                    email : "",
                                    password : ""
                                    })

    const [showPassword, setshowPassword] = useState(false);

    function handleLoginChange(e) {

        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })

        
    }
    async function checkUser() {
        try {
            const response = await axios.post("http://localhost:3000/login",userInfo);
            localStorage.setItem("token",response.data.token);

            navigate("/app/dashboard");
            console.log("navigated");
            
        } catch (error) {

            alert(error.response.data.message); // to access the my custom error message
        }

    }
    return (
        <>
            <div className='Login-container'>
                <Logo className="Loginpage-Logo" />

                <div className='middleText'>

                    <h1 className='Welcome-heading-text'> Welcome Back&nbsp;!&nbsp;&nbsp;👋</h1>
                    <p className='Welcome-subtext'> Login&nbsp; to&nbsp; continue&nbsp; to&nbsp; your&nbsp; account </p>

                </div>

                <div className='Input-fields-container'>
                    <input 
                        name='email'
                        className='Email-inputfield field-style' 
                        type='Email' 
                        placeholder='Email address'
                        onChange={(handleLoginChange)}
                    />

                    <div className='passwordinputfield-container field-style'>
                        <input
                            name='password'
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            className='Password-inputfield'
                            onChange={(handleLoginChange)}

                        />

                        <span
                            className='Password-eyeicon'
                            onClick={() => { setshowPassword((prev) => !prev) }}
                        >

                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </span>
                    </div>

                    <button onClick={checkUser} className='Login-button field-style'>Login</button>

                    <p>Don't have an account? <a href='/signup'>Sign up </a></p>
                </div>

            </div>
        </>
    )
}

export default Login;