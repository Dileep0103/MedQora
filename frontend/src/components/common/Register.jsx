import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Button,
  Form,
  Card,
  Row,
  Col,
  Container as RBContainer,
} from 'react-bootstrap';
import { message } from 'antd';
import p2 from '../../images/p2.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axiosConfig';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    type: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/user/register', user);

      if (res.data.success) {
        message.success('Registered Successfully');
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error('Register error:', error);

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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              YaseenCareBook
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>

            <Nav className="gap-3">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RBContainer className="my-5">
        <Card style={{ border: 'none' }}>
          <Row
            style={{ background: 'rgb(190, 203, 203)' }}
            className="g-0 p-3"
          >
            <Col md={6}>
              <div className="d-flex mx-3 flex-column">
                <div className="d-flex flex-row mb-2">
                  <span className="h1 text-center fw-bold">
                    Sign up to your account
                  </span>
                </div>

                <div className="p-2">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        name="fullName"
                        value={user.fullName}
                        onChange={handleChange}
                        type="text"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        type="text"
                      />
                    </Form.Group>

                    <div className="my-3">
                      <Form.Check
                        inline
                        label="Admin"
                        name="type"
                        type="radio"
                        value="admin"
                        checked={user.type === 'admin'}
                        onChange={handleChange}
                      />

                      <Form.Check
                        inline
                        label="User"
                        name="type"
                        type="radio"
                        value="user"
                        checked={user.type === 'user'}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      style={{ marginTop: '20px' }}
                      variant="dark"
                      size="lg"
                      type="submit"
                    >
                      Register
                    </Button>
                  </Form>

                  <p
                    className="mb-5 pb-md-2 mt-3"
                    style={{ color: '#393f81' }}
                  >
                    Have an account?{' '}
                    <Link to="/login" style={{ color: '#393f81' }}>
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <img
                style={{ mixBlendMode: 'darken' }}
                src={p2}
                alt="register form"
                className="rounded-start w-100"
              />
            </Col>
          </Row>
        </Card>
      </RBContainer>
    </>
  );
};

export default Register;