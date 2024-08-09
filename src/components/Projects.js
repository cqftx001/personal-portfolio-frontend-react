import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/aichatbot.png";
import projImg2 from "../assets//img/cloudstorage.png";
import projImg3 from "../assets/img/employeemanager.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Discord FishGame integrated with AI Chatbot",
      description: "This project aims to create an interactive Discord fishing game with an integrated AI chatbot, with multiple features to improve user engagement and platform efficiency.",
      imgUrl: projImg1,
    },
    {
      title: "Web Cloud Storage App",
      description: "This is a web-based cloud storage application that offers users the ability to store files, manage notes, and securely save website credentials.",
      imgUrl: projImg2,
    },
    {
      title: "Employee Manager App",
      description: "Employee Manager App is an application for managing employee information with create, read, update, and delete (CRUD) functions. The application uses the Spring Boot framework to build the backend, MongoDB as the database, and React for the frontend.",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>            
                <ul>
                  <li>
                    <strong>Discord AI Chatbot with Integrated Fishing Game</strong><br />
                    <em>Features:</em> Dynamic Image Generation, Interactive Fishing Game<br />
                    <em>Technologies Used:</em> Python, OpenAI API, PHP Larrvel, MongoDB, Redis<br />
                  </li>
                  <br />
                  <li>
                    <strong>Web Cloud Storage App</strong><br />
                    <em>Features:</em> Spring Boot Backend, Secure File Storage, User Authentication<br />
                    <em>Technologies Used:</em> Spring Boot, Thymeleaf, MySQL, Hash Encryption<br />
                  </li>
                  <br />
                  <li>
                    <strong>Employee Manager App</strong><br />
                    <em>Features:</em> Employee Records, Task Management<br />
                    <em>Technologies Used:</em> Spring Boot, React, MongoDB<br />
                  </li>
                </ul>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be continued...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be continued...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
