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
      const res = await axios.post('/user/register', user);

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

    <RBContainer fluid className="px-4 my-5">
      <Card style={{ border: "none" }}>
        <Row
          className="g-0 p-4"
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {/* Left Side */}
          <Col md={6} className="d-flex align-items-center">
            <div className="w-100 px-4">
              <h1
                style={{
                  color: "#1E293B",
                  fontWeight: "700",
                  fontSize: "2.2rem",
                  marginBottom: "10px",
                }}
              >
                Create Account 🚀
              </h1>

              <p style={{ color: "#64748B" }}>
                Join MedQora and manage your healthcare effortlessly.
              </p>

              <div className="mt-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your full name"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="Create a password"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your phone number"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <div className="d-flex gap-4 my-3">
                    <Form.Check
                      label="Admin"
                      name="type"
                      type="radio"
                      value="admin"
                      checked={user.type === "admin"}
                      onChange={handleChange}
                    />

                    <Form.Check
                      label="User"
                      name="type"
                      type="radio"
                      value="user"
                      checked={user.type === "user"}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-3 mb-3"
                    style={{
                      backgroundColor: "#2563EB",
                      border: "none",
                      padding: "12px",
                      width: "100%",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Create Account
                  </Button>
                </Form>

                <p
                  className="mt-4"
                  style={{ color: "#2563EB" }}
                >
                  Have an account?{" "}
                  <Link
                    to="/login"
                    style={{ color: "#2563EB" }}
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-centerpx-4"
          >
            <img
              src={p2}
              alt="register form"
              className="img-fluid"
              style={{
                maxHeight: "600px",
                objectFit: "contain",
                mixBlendMode: "darken",
              }}
            />
          </Col>
        </Row>
      </Card>
    </RBContainer>
  </>
);
};

export default Register;