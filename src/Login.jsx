import React, { useRef, useEffect, useState } from "react";
import './App.css';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();    

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setErrorMessage('');
      setSuccessMessage('Login successful!');
    
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      setSuccessMessage('');
      setErrorMessage('Invalid email or password!');
     
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            ref={emailRef}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            ref={passwordRef}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <a href="/register" className="link">
        Don't have an account? Register
      </a>
    </div>
  );
}
