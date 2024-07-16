import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import api from "../../Assets/Projects/api.jpg";

import otpMail from "../../Assets/Projects/otp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Go-Bank-Service"
              description="API for the Banking system which includes Authentication - Authorization, User Management, Account management, all developed in Go language using Fiber Gorm and designed with Hexagonal architecture."
              ghLink="https://github.com/PParist/go-bank-service"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otpMail}
              isBlog={false}
              title="OTP-Service"
              description="My personal send email service"
              ghLink="https://github.com/PParist/go-otp-service"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
