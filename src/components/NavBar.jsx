import React, { useState } from 'react';
import '../styles/NavBar.css';
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';
import { handleError } from 'vue';

const Navbar = ({ setLoggedIn, getTaskFromDB }) => {
  const [logging, setLogging] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('name'));
  const handleLogout =async () => {
    // console.log("log out fn")
    localStorage.setItem('userName', '');
    localStorage.setItem('userEmail', '');
    setUsername('');
    // console.log("by log out");
    setLoggedIn(false);
    // await getTaskFromDB();
    // console.log(username, " logging out")
  }
  // setUsername(localStorage.getItem('name'));
  // console.log(username)
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Todo App</h2>
      </div>
      <div className="nav-links">
        <div className="right-links">
          {(localStorage.getItem('userName').length > 0) ? (
            <>
              <span className="greeting">Hello, {localStorage.getItem('userName')}!</span>
              <button className="link" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="link" onClick={() => setLogging(!logging)}>Login</button>
              <LoginComponent setLoggedIn={setLoggedIn} logging={logging} setLogging={setLogging}></LoginComponent>
              <button className="link" onClick={() => setRegistering(!registering)}>Register</button>
              <RegisterComponent registering={registering} setRegistering={setRegistering}></RegisterComponent>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
