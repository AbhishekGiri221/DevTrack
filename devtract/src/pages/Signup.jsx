import './Signup.css';
import Logo from '../components/logo/Logo';
import { use, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [user, setUser] = useState({
        name : "",
        email : "",
        password : ""
    });

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }


    function validateInput(user){
        console.log("Hii");
        if(user.name.trim() === "" || user.name.length <3){
            return "Invalid email";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(user.email)){
            return "Enter a valid email"
        }

        if(user.password.length < 8){
            return "Password length must be greate that 8";
        }
        return null;
    }


    async function createUser() {

        const error = validateInput(user);

        if(error){
            alert(error);
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/signup",user);

            alert("User created Successfully");

            // <Navigate to={"/login"}/>
            navigate("/login");
            
        } catch (error) {
            alert(error.message);
        }
        
    }

    return (
        <div className="Auth-page">

            <div className="Signup-container">

                <Logo className="Signuppage-Logo" />

                <div className="middleText">

                    <h1 className="Welcome-heading-text">
                        Create Account 🎉
                    </h1>

                    <p className="Welcome-subtext">
                        Sign up to continue
                    </p>

                </div>


                <div className="Input-fields-container">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="field-style"
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="field-style"
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                    />


                    <div className="passwordinputfield-container field-style">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="Password-inputfield"
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                        />

                        <span
                            className="Password-eyeicon"
                            onClick={() => setShowPassword(prev => !prev)}
                            autoComplete = "new-password"
                            
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                    </div>


                    <button
                        className="Signup-button field-style"
                        onClick={createUser}
                    >
                        Sign Up
                    </button>


                    <p>
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Signup;