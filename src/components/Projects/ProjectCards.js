import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// fallback/default image
import defaultPreview from "../../Assets/Projects/default-preview.png"; // Add your own image here

function ProjectCards({ imgPath, title, description, ghLink, demoLink, techIcons = [] }) {
  const projectImage = imgPath || defaultPreview;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={projectImage} alt={title} onError={(e) => (e.target.src = defaultPreview)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {techIcons.length > 0 && (
          <div
            className="tech-icons-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              margin: "15px 0",
            }}
          >
            {techIcons.map(({ icon: Icon, name }, idx) => (
              <div key={idx} title={name} style={{ fontSize: "1.7rem", color: "#7952b3" }}>
                <Icon />
              </div>
            ))}
          </div>
        )}

        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank" rel="noopener noreferrer">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}

        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Live
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;