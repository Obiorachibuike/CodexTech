import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // ⬅️ Add this for fade-in animation styles

function useIntersectionObserver() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function ProjectCards({ imgPath, title, description, ghLink, demoLink, techIcons = [], isBlog = false }) {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <Card ref={cardRef} className={`project-card-view ${isVisible ? "visible" : ""}`}>
      <Card.Img variant="top" src={imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div className="tech-icon-row">
          {techIcons.map((Icon, idx) => (
            <span className="tech-icon" key={idx}>
              <Icon />
            </span>
          ))}
        </div>

        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
        </Button>
        {" "}
        {!isBlog && demoLink && (
          <Button variant="primary" href={demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;