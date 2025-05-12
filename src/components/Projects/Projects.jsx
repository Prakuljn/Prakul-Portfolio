import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weapon Inventory Managemenet System",
      description: "Our weapon and inventory management system lets admins add room incharges and assign signature th the authorities. Room incharges can add weapons and assign them to soldiers after signatures of the authorities. Soldiers have to sign for weapon use, and when returning they have to give remark for any damages, if damage happens weapon will automatically added to damaged section. Using the unique number of gun they can see the condition of gun, how much it is fired , assigned to which soldier and many more. Admin can track weapon usage, assignments, conditions, and daily entries for thorough oversight.",
      image: chatify,
      github: "https://github.com/AnshulMenaria/Weapon-Inventory-Management",
      demo: "",
    },
    
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} key={project.id} className="project-card">
              <Card className="project-card-view">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {project.description}
                  </Card.Text>
                  {project.github && (
                    <Button variant="primary" href={project.github} target="_blank">
                      <BsGithub /> &nbsp;GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;Demo
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
