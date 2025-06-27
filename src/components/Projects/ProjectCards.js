import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import LMmodel from "../../Assets/Projects/LMmodel.png";
import  "./ProjectCards.css"

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  techIcons = [],
  visible,
  fadingOut,
}) {
  return (
    <div
      className={`project-card fade-in-up ${
        visible ? "visible" : ""
      } ${fadingOut ? "fading-out" : ""}`}
    >
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={imgPath || LMmodel}
          alt="project-preview"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = LMmodel;
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
            {techIcons.length > 0 && (
              <div className="tech-icon-row">
                {techIcons.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <span key={index} title={tech.name} className="tech-icon">
                      <IconComponent />
                    </span>
                  );
                })}
              </div>
            )}
          </div>
          <div className="d-flex mt-3">
            {ghLink && (
              <Button variant="primary" href={ghLink} target="_blank">
                <BsGithub /> &nbsp;GitHub
              </Button>
            )}
            {demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                className="ms-2"
              >
                <CgWebsite /> &nbsp;Live
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCards;