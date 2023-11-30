// Login.js
import React, { useState } from 'react';

const Login = ({ onCancel }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    // Prevent the default form submission behavior
    // event.preventDefault();
    console.log("Call the onCancel function passed from the parent component")
    onCancel();
  

  };
  const handleLogin = () => {
    // Redirect to Google.com

    console.log("Redirect to Google.com")

    window.location.href = 'https://www.google.com';
  };

  return (
    <div className={`login-form`}>
      <h2>Login Form</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button onClick={handleLogin}>Login</button>
        <button className='bg-white text-black' type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Login;
