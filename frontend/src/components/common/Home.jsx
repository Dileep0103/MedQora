import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import p3 from "../../images/p3.webp";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        bg="white"
        className="shadow-sm py-3"
      >
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
            <Nav className="ms-auto align-items-center">
              <Link to="/" className="me-4">
                Home
              </Link>

              <Link to="/login" className="me-4">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6 text-center">
            <img
              src={p3}
              alt="Doctor"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                color: "#1E293B",
              }}
            >
              Your Health,
              <br />
              Our Priority
            </h1>

            <p
              style={{
                color: "#64748B",
                fontSize: "1.1rem",
                marginTop: "20px",
              }}
            >
              Book appointments with trusted doctors,
              manage your healthcare journey,
              and access quality care anytime.
            </p>

            <Button
              style={{
                backgroundColor: "#2563EB",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2
          className="text-center mb-5"
          style={{
            color: "#1E293B",
            fontWeight: "700",
          }}
        >
          Why Choose MedQora?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h4>Verified Doctors</h4>
              <p>
                Connect with experienced and trusted healthcare professionals.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h4>Easy Booking</h4>
              <p>
                Schedule appointments in just a few clicks anytime.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 h-100">
              <h4>24/7 Access</h4>
              <p>
                Manage appointments and healthcare records whenever needed.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </>
  );
};

export default Home;