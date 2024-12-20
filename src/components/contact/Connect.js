import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Container, Row, Col, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Connect = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    neededCare: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Redirect to contact page
    console.log("Redirecting to contact page");
    navigate("/contact");
  };

  return (
    <>
      {/* Section 1 */}
      <section className="your-section-class">
        <Container
          fluid
          style={{ display: "flex", justifyContent: "center", width: "90%" }}
        >
          <div style={{ flex: 1, marginTop: "50px", marginBottom: "50px" }}>
            <Row>
              <h2 style={{ fontSize: "4rem", fontWeight: "600" }}>
                Need More Information? Contact Us Today
              </h2>
              <p
                style={{
                  fontFamily: "Sans-serif",
                  paddingTop: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                  // lineHeight: "20px",
                }}
              >
                FINANCIAL DIFFICULTY • FAMILY SITUATIONS • EMOTIONAL WELL-BEING
                • PRAYER • SPIRITUAL GUIDANCE • HOSPITAL VISITS
              </p>
              <Col xs={12} md={6}>
                <p style={{ display: "flex" }}>
                  <img
                    src="gettoknowphone.jpeg"
                    alt="Phone"
                    className="img-fluid"
                    style={{
                      width: "100px",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    +234 703 158 8404{" "}
                  </span>
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div style={{ paddingTop: "20px", paddingRight: "20px" }}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "0",
                        }}
                      >
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        size="sm"
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          border: "none",
                          borderRadius: "6px",
                          margin: "8px 0",
                          padding: "8px",
                          background: "#d69f0638",
                          color: "#000",
                          boxShadow: "#86b3123b 0px .1px 8px",
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "0",
                        }}
                      >
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        size="sm"
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          border: "none",
                          borderRadius: "6px",
                          margin: "8px 0",
                          padding: "8px",
                          background: "#d69f0638",
                          color: "#000",
                          boxShadow: "#86b3123b 0px .1px 8px",
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formNeededCare">
                      <Form.Label
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "0",
                        }}
                      >
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="Enter details about your needed care"
                        name="neededCare"
                        value={formData.neededCare}
                        onChange={handleChange}
                        size="sm"
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          border: "none",
                          borderRadius: "6px",
                          margin: "8px 0",
                          padding: "8px",
                          background: "#d69f0638",
                          color: "#000",
                          boxShadow: "#86b3123b 0px .1px 8px",
                        }}
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="warning"
                      style={{
                        maxWidth: "200px",
                        backgroundColor: "#d49c04",
                        color: "#fff",
                        marginTop: "20px",
                      }}
                    >
                      SEND
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Connect;
