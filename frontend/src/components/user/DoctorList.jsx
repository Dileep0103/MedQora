import { message } from "antd";
import axiosInstance from "../../api/axiosConfig";
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const DoctorList = ({ userDoctorId, doctor, userdata }) => {
  const [dateTime, setDateTime] = useState("");
  const [documentFile, setDocumentFile] = useState(null);
  const [show, setShow] = useState(false);

  const currentDate = new Date().toISOString().slice(0, 16);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleDocumentChange = (event) => {
    setDocumentFile(event.target.files[0]);
  };

  console.log(doctor._id);

  const handleBook = async (e) => {
    e.preventDefault();

    try {
      const formattedDateTime = dateTime.replace("T", " ");

      const formData = new FormData();
      formData.append("image", documentFile);
      formData.append("date", formattedDateTime);
      formData.append("userId", userDoctorId);
      formData.append("doctorId", doctor._id);
      formData.append("userInfo", JSON.stringify(userdata));
      formData.append("doctorInfo", JSON.stringify(doctor));

      const res = await axiosInstance.post(
        "/user/getappointment",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        handleClose();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Unable to book appointment");
    }
  };

  return (
    <>
      <Card
        style={{
          border: "none",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          overflow: "hidden",
          transition: "0.3s ease",
          height: "100%",
        }}
      >
        <Card.Body>
          <div className="text-center mb-3">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#DBEAFE",
                color: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "700",
                margin: "0 auto",
              }}
            >
              {doctor.fullName?.charAt(0)}
            </div>
          </div>

          <Card.Title
            className="text-center"
            style={{
              fontWeight: "700",
              color: "#1E293B",
            }}
          >
            Dr. {doctor.fullName}
          </Card.Title>

          <Card.Text>
            <p>
              Phone: <b>{doctor.phone}</b>
            </p>
          </Card.Text>

          <Card.Text>
            <p>
              Address: <b>{doctor.address}</b>
            </p>
          </Card.Text>

          <Card.Text>
            <p>
              Specialization:
              <span
                style={{
                  marginLeft: "8px",
                  background: "#DBEAFE",
                  color: "#2563EB",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {doctor.specialization}
              </span>
            </p>
          </Card.Text>

          <Card.Text>
            <p>
              Experience: <b>{doctor.experience} Yrs</b>
            </p>
          </Card.Text>

          <Card.Text>
            <p>
              Fees: <b style={{ color: "#14B8A6" }}>₹{doctor.fees}</b>
            </p>
          </Card.Text>

          <Card.Text>
            <p>
              Timing:{" "}
              <b>
                {doctor.timings[0]} : {doctor.timings[1]}
              </b>
            </p>
          </Card.Text>

          <Button
            onClick={handleShow}
            style={{
              backgroundColor: "#2563EB",
              border: "none",
              width: "100%",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "600",
            }}
          >
            Book Appointment
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Booking Appointment</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleBook}>
              <Modal.Body>
                <strong>
                  <u>Doctor Details:</u>
                </strong>

                <br />

                Name:&nbsp;&nbsp;{doctor.fullName}

                <hr />

                Specialization:&nbsp;<b>{doctor.specialization}</b>

                <hr />

                <Row className="mb-3">
                  <Col md={{ span: 8, offset: 2 }}>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Date and Time:</Form.Label>

                      <Form.Control
                        type="datetime-local"
                        min={currentDate}
                        value={dateTime}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Documents (Optional)</Form.Label>

                      <Form.Control
                        accept="image/*"
                        type="file"
                        size="sm"
                        onChange={handleDocumentChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button type="submit" variant="primary">
                  Book
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

export default DoctorList;