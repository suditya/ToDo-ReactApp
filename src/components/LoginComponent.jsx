import React, { useState } from 'react';
import '../styles/LoginComponent.css';
import { login } from '../services/login'

export const LoginComponent = ({ logging, setLogging , setLoggedIn, getTaskFromDB}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    // const [logging, setLogging] = useState(logging);
    const [isSuccess, setSuccess] = useState(false);
    // const contentStyle = {
    //     display: showContent ? 'flex' : 'none',
    //   };
    
    // console.log("logging in login component , ", logging, " ", logging)
    const signIn = async () => {
        // console.log('login pressed');

        // console.log('Email:', email);
        // console.log('Password:', password);
        const credentials =
        {
            email,
            password
        }
        try {
            const response = await login(credentials);
            // console.log(response.data.data);
            // let {name, email} = response.data;
            let name = response.data.data[0].name;
            let emailID = response.data.data[0].email;
            // console.log(name, " ", emailID);
            // localStorage('name', )
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", emailID);
            // console.log(localStorage.getItem('userName'), "saved name")


            setSuccess(true);
            // console.log("by loggin in")
            setLoggedIn(true);
            // await getTaskFromDB();
            setTimeout(() => {
                setSuccess(false);
                setLogging(false);
            }, 2000)
            console.log(localStorage.getItem("name"), " local storage ")

        } catch (error) {
            // alert(error, "error");
            // setLogging(false);
            setError(true);
            try {
                setErrorMsg(error.response.data.message)
            } catch (error) {
                setErrorMsg("error.response.data.message)")
            }
            
            setTimeout(() => {
                setError(false);
                setErrorMsg('');
                // setLogging(false);
            }, 2000)

        }
    };



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn();
    };



    return (
        <div className={`login-component ${logging ? 'show' : ''}`}  >
            <div className='login-result'>
                {isError && (
                    <div className='error-popup'>
                        <h1>Error:</h1>
                        <p>{errorMsg}</p>
                    </div>
                )}
                {isSuccess && (
                    <div className='success-popup'>
                        <h1>Success:</h1>
                        <p>Login Successful</p>
                    </div>
                )}
            </div>
            <div className="login-container" style={{ display: logging ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
                <div className="cross-button" onClick={()=> setLogging(false)}>
                    X
                </div>
                <h2 style={{ color: 'black' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            required
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};
