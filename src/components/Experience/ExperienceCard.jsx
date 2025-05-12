import { Card, Row, Col } from "react-bootstrap";

const ExperienceCard = () => {
  // State to hold the list of experiences
  const experiences = [
    {
      title: "DATA SCIENCE INTERN",
      company: "REGEX SOFTWARE SERVICES",
      date: "December 2024 - Present",
    },
  ];

  return (
    <div>
      <Row>
        {experiences.map((experience, index) => (
          <Col md={12} key={index} className="mb-3" >
            <Card
              style={{
                backgroundColor: "#6615BE", // Purple background for contrast
                borderRadius: "10px",
                width: "100%", // Full width for longer cards
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a modern look
              }}
            >
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title
                  className="mb-3"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "600", // Bold title for emphasis
                    color: "#ffffff", // White color for the title
                    textAlign: "left",
                  }}
                >
                  {experience.title}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{
                    fontSize: "1.1em", // Slightly smaller subtitle
                    fontWeight: "500", // Medium weight for company name
                    color: "#f0f0f0", // Lighter gray for the company name
                    textAlign: "left",
                  }}
                >
                  {experience.company}
                </Card.Subtitle>
                <Card.Text
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1em", // Slightly larger text for the date
                    color: "#f0f0f0", // Lighter color for the date
                    textAlign: "left",
                  }}
                >
                  {experience.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExperienceCard;
