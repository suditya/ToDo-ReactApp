import React, { useState } from 'react';
import '../styles/LoginComponent.css';
import { register } from '../services/register'

export const RegisterComponent = ({ registering, setRegistering }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  // const [logging, setLogging] = useState(registering);
  const [isSuccess, setSuccess] = useState(false);
  // const contentStyle = {
  //     display: showContent ? 'flex' : 'none',
  //   };
  console.log("registering in register component , ", registering, " ")
  const signIn = async () => {
    console.log('register pressed');

    console.log('Email:', email);
    console.log('Password:', password);
    const credentials =
    {
      email,
      password,
      name
    }
    try {
      const response = await register(credentials);
      console.log(response.data.data);
      // let {name, email} = response.data;
      // let name = response.data.data[0].name;
      // let emailID = response.data.data[0].email;
      // console.log(name, " ", emailID);
      // // localStorage('name', )
      // localStorage.setItem("name", name);


      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setRegistering(false);
      }, 2000)
      // console.log(localStorage.getItem("name"), " local storage ")

    } catch (error) {
      // alert(error, "error");
      // setRegistering(false);
      console.log(error.response.data.message)
      setError(true);
      setErrorMsg(error.response.data.message)
      setTimeout(() => {
        setError(false);
        setErrorMsg('');
        // setRegistering(false);
      }, 2000)

    }
  };



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn();
  };



  return (
    <div className={`login-component ${registering ? 'show' : ''}`}  >
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
            <p>register Successful</p>
          </div>
        )}
      </div>
      <div className="login-container" style={{ display: registering ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
      <div className="cross-button" onClick={()=> setRegistering(false)}>
                    X
                </div>
        <h2 style={{ color: 'black' }}>register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
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
          <button type="submit">register</button>
        </form>
      </div>
    </div>
  );
};
