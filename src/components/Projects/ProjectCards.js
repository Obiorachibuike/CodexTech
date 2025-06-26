import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, techIcons = [] }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        <div className="tech-icons-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "10px 0" }}>
          {techIcons.map(({ icon: Icon, name }, index) => (
            <div key={index} title={name} style={{ fontSize: "1.8rem", color: "#7952b3" }}>
              <Icon />
            </div>
          ))}
        </div>

        <Button variant="primary" href={ghLink} target="_blank" rel="noopener noreferrer">
          <BsGithub /> &nbsp;
          GitHub
        </Button>

        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;