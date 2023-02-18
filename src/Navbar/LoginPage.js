import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [name, setName] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log('Sign in with email:', email, 'and password:', password);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('Sign up with email:', email, 'and password:', password, 'and retype password:', retypePassword, 'and name:', name);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log('Forgot password with email:', email);
  };

  return (
    <Container fluid className="bg-white">
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={6} lg={4}>
          {!showSignUp && !showForgotPassword && (
            <Form onSubmit={handleSignIn}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign In
              </Button>
              <Button variant="link" className="float-right" onClick={() => setShowForgotPassword(true)}>
                Forgot password?
              </Button>
              <Button variant="link" className="float-left" onClick={() => setShowSignUp(true)}>
                Sign Up
              </Button>
            </Form>
          )}

          {showSignUp && (
            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicRetypePassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password" placeholder="Retype Password" value={retypePassword} onChange={(event) => setRetypePassword(event.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <Button variant="link" className="float-left" onClick={() => setShowSignUp(false)}>
                Back
              </Button>
            </Form>
         

          )}
        {showForgotPassword && (
            <Form onSubmit={handleForgotPassword}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="link" className="float-left" onClick={() => setShowForgotPassword(false)}>
                Back to Sign In
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
