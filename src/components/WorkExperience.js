import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const workExperiences = [
  {
    title: "Software Engineer Intern",
    company: "VisionX LLC",
    location: "San Francisco, CA",
    period: "Mar 2024 - Present",
    description: [
      "Using Java and Spring Boot to implement and optimize backend services, such as user login management and access control, resulting in an 8% increase in system run-time performance.",
      "Conducted comprehensive testing using JUnit and Selenium, ensuring both individual component functionality and overall application reliability.",
      "Participated in code reviews using Git, enhancing code quality and team collaboration."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Eth Tech",
    location: "Newark, CA",
    period: "May 2022 - Feb 2024",
    description: [
      "Built the backend with PHP Laravel and MongoDB, implemented front-end logic with Python, and used OpenAI API to create an interactive Discord chatbot with advanced NLP and dynamic image generation, enhancing user engagement.",
      "Developed a fishing game within the bot that includes buying, fishing, and inventory management, boosting user interaction.",
      "Designed a flash sale system with distributed transactions and message queues, improving efficiency for item management.",
      "Implemented rate limiting and risk control measures, reducing malicious activity by 67% and improving platform integrity.",
      "Deployed and managed the entire application on AWS, ensuring high availability, scalability, and security."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Zhejiang Lidao Trading Co., Ltd.",
    location: "Jiaxing, Zhejiang",
    period: "May 2021 - Oct 2021",
    description: [
      "Designed and implemented static web pages using HTML, CSS, and JavaScript, ensuring a user-friendly experience.",
      "Developed and deployed security measures including token-based authentication to prevent fraudulent activities like rapid repeat orders by the same customers, enhancing transaction security.",
      "Improved help desk response times by efficiently prioritizing support requests, reducing average resolution time by 18%."
    ],
  },
];

export const WorkExperience = () => {
  const [showDescription, setShowDescription] = useState(Array(workExperiences.length).fill(false));

  const toggleDescription = (index) => {
    const updatedShowDescription = [...showDescription];
    updatedShowDescription[index] = !updatedShowDescription[index];
    setShowDescription(updatedShowDescription);
  };

  return (
    <section id="work-experience" className="py-5">
      <Container>
        <h2 className="mb-4">Work History</h2>
        {workExperiences.map((experience, index) => (
          <Row key={index} className="mb-4">
            <Col xs={12}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{experience.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {experience.company}
                  </Card.Subtitle>
                  <Card.Text>
                    {experience.location}<br />
                    {experience.period}
                  </Card.Text>
                  <Button variant="link" onClick={() => toggleDescription(index)}>
                    {showDescription[index] ? "Hide Description" : "Show Description"}
                  </Button>
                  {showDescription[index] && (
                    <ul className="text-muted mt-2">
                      {experience.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};
