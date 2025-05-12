import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="contact-heading">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to reach out for collaborations or any inquiries.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={6} lg={4} className="contact-card">
            <Card className="contact-card-view border-purple">
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text>
                  <AiOutlineMail /> &nbsp; prakuljn3105@gmail.com
                </Card.Text>
                <Button variant="outline-light" href="mailto:developer@example.com">
                  <AiOutlineMail /> &nbsp; Send Email
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="contact-card">
            <Card className="contact-card-view border-linkedin">
              <Card.Body>
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                  <AiFillLinkedin /> &nbsp; linkedin.com/in/prakuljn
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://linkedin.com/in/prakuljn"
                  target="_blank"
                >
                  <AiFillLinkedin /> &nbsp; View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="contact-card">
            <Card className="contact-card-view border-github">
              <Card.Body>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                  <AiFillGithub /> &nbsp; github.com/Prakuljn
                </Card.Text>
                <Button
                  variant="dark"
                  href="https://github.com/Prakuljn"
                  target="_blank"
                >
                  <AiFillGithub /> &nbsp; Visit GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
