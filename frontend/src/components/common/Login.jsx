import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, Card, Row, Col, Container as RBContainer } from 'react-bootstrap';
import { message } from 'antd';
import photo1 from '../../images/photo1.png';
import axiosInstance from '../../api/axiosConfig';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post('/user/login', user);

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));

        message.success('Login successfully');

        const isLoggedIn = JSON.parse(localStorage.getItem('userData'));
        const { type } = isLoggedIn;

        switch (type) {
          case 'admin':
            navigate('/adminhome');
            break;

          case 'user':
            navigate('/userhome');
            break;

          default:
            navigate('/login');
            break;
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        message.error(
          `Error ${error.response.status}: ${
            error.response.data.message || 'Server error'
          }`
        );
      } else if (error.request) {
        message.error(
          'No response from server. Please check your network or backend server.'
        );
      } else {
        message.error('Error: ' + error.message);
      }
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="white" className="shadow-sm py-3">
  <Container>
    <Navbar.Brand
      style={{
        fontSize: "1.8rem",
        fontWeight: "700",
        color: "#2563EB",
      }}
    >
      MedQora
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />

    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <RBContainer className="my-5">
        <Card style={{ border: 'none' }}>
          <Row className="g-0 p-4"
                style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
          >
            <Col md={6}>
              <img
                src={photo1}
                alt="login form"
                className="rounded-start w-100"
              />
            </Col>

            <Col md={6}>
              <div className="d-flex mx-5 flex-column justify-content-center h-100">

  <div className="mt-2 mb-4">
    <h1
      style={{
        color: "#1E293B",
        fontWeight: "700",
        marginBottom: "10px",
      }}
    >
      Welcome Back 👋
    </h1>

    <p style={{ color: "#64748B" }}>
      Login to continue your healthcare journey.
    </p>
  </div>

  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="email"
        value={user.email}
        onChange={handleChange}
        type="email"
        autoComplete="off"
        placeholder="Enter your email"
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Label>Password</Form.Label>
      <Form.Control
        name="password"
        value={user.password}
        onChange={handleChange}
        type="password"
        autoComplete="off"
        placeholder="Enter your password"
      />
    </Form.Group>

    <Button
      type="submit"
      className="mb-4"
      style={{
        backgroundColor: "#2563EB",
        border: "none",
        padding: "12px",
        width: "100%",
        borderRadius: "10px",
        fontWeight: "600",
      }}
    >
      Login
    </Button>
  </Form>

  <p
    className="mb-3"
    style={{ color: "#64748B" }}
  >
    Don't have an account?{" "}
    <Link
      to="/register"
      style={{
        color: "#2563EB",
        fontWeight: "600",
      }}
    >
      Register here
    </Link>
  </p>

</div>
            </Col>
          </Row>
        </Card>
      </RBContainer>
    </>
  );
};

export default Login;