import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png"; // Add an image of you working
import Toolstack from "./Toolstack";
import ExperienceCard from "./ExperienceCard"; // This is where your experience card will be displayed

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Experiences</strong>
            </h1>
            <ExperienceCard /> {/* Placeholder for your ExperienceCard */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "150px", }}
            className="about-img mt-5"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Skillset Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack /> {/* Your technical skills will be displayed here */}

        {/* Tools Section */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> {/* The tools you are familiar with */}
        
        {/* GitHub Section */}
        {/* <Github /> Showcase GitHub repositories or projects */}
      </Container>
    </Container>
  );
}

export default Experience;
