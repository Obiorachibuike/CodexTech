import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import LMmodel from "../../Assets/Projects/LMmodel.png"; // Default fallback image

function ProjectCards({ imgPath, title, description, ghLink, demoLink, techIcons = [] }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath || LMmodel}
        alt="project-preview"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = LMmodel; // fallback in case of broken link
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {/* Tech Stack Icons */}
        {techIcons.length > 0 && (
          <div className="tech-icons-wrapper" style={{ margin: "10px 0" }}>
            {techIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <span key={index} title={tech.name} style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                  <IconComponent />
                </span>
              );
            })}
          </div>
        )}

        {/* GitHub Button */}
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}

        {/* Demo Button - optional */}
        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Live
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;