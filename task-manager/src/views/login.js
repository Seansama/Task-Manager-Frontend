import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = ({ onLogin }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        const url = isSignup ? '/api/signup' : '/api/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json.error) {
            setShowAlert(true);
            setAlertMessage(json.error);
        } else {
            onLogin(json.token);
        }
    };

    const handleToggle = () => {
        setIsSignup(!isSignup);
    };

    return (
        <Container className="mt-5">
            <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                {showAlert && <Alert variant="danger">{alertMessage}</Alert>}

                <Button variant="primary" type="submit">
                    {isSignup ? 'Sign Up' : 'Log In'}
                </Button>

                <Button variant="link" onClick={handleToggle} className="ml-2">
                    {isSignup ? 'Already have an account?' : 'Create an account'}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;