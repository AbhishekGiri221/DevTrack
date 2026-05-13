import './Login.css';
import Logo from '../components/logo/Logo';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

    const [showPassword, setshowPassword] = useState(false);

    return (
        <>
            <div className='Login-container'>
                <Logo className="Loginpage-Logo" />

                <div className='middleText'>

                    <h1 className='Welcome-heading-text'> Welcome Back&nbsp;!&nbsp;&nbsp;👋</h1>
                    <p className='Welcome-subtext'> Login&nbsp; to&nbsp; continue&nbsp; to&nbsp; your&nbsp; account </p>

                </div>

                <div className='Input-fields-container'>
                    <input name = 'email' className='Email-inputfield field-style' type='Email' placeholder='Email address' />

                    <div className='passwordinputfield-container field-style'>
                        <input
                            name='password'
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            className='Password-inputfield'
                        />

                        <span
                            className='Password-eyeicon'
                            onClick={() => { setshowPassword((prev) => !prev) }}
                        >

                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </span>
                    </div>

                    <button className='Login-button field-style'>Login</button>

                    <p>Don't have an account? Sign up</p>
                </div>

            </div>
        </>
    )
}

export default Login;