import React, {useState} from "react";
import {Form, Button } from 'react-bootstrap';

const signupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.href = '/login';
    };

    return (
        <div> 
            <h1>Signup</h1>
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
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>

                <Button variant="primary" onClick={handleSignup}> Signup </Button>
            </Form>
        </div>
    );
};

export default SignupPage;