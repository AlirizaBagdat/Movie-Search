import React, { useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './login.css'


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    

    useEffect(() => {
      // Check if user is already logged in
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      if (isLoggedIn) {
          setLoggedIn(true);
      }
  }, []);
    


    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');
            setLoggedIn(true);
            } else {
                alert('Invalid username or Password');
            }
    };
    if (loggedIn) {
      return <Navigate to='/search'/>;
    }

    return (
        <div>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default LoginPage;
