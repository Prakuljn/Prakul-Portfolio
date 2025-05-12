import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <h1 style={{ fontSize: "3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="about-body">
              I am an enthusiastic <b className="purple">AI/ML Engineer</b> with practical experience gained as a <b className="purple">Data Science Intern</b>. My work revolves around developing intelligent systems and data-driven solutions to solve real-world problems.
              <br />
              <br />
              I specialize in cutting-edge technologies such as:
              <i>
                <b className="purple"> Artificial Intelligence, Machine Learning, Deep Learning, and Python Programming</b>
              </i>.
              <br />
              <br />
              I am also proficient in working with relational databases like
              <i>
                <b className="purple"> PostgreSQL (PSSQL)</b>
              </i>, and I have a strong foundation in frontend web development using
              <i>
                <b className="purple"> HTML, JavaScript, and CSS</b>
              </i>.
              <br />
              <br />
              I am passionate about turning data into actionable insights, building smart algorithms, and continuously learning to stay updated with the latest advancements in AI and data science.
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
