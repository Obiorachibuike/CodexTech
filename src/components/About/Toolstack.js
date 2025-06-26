import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows,
  SiGithub,
  SiFigma,
  SiDocker,
  SiNotion,
  SiSlack,
  SiNodedotjs,
} from "react-icons/si";
import "./Toolstack.css";

const tools = [
  { icon: <SiWindows />, name: "Windows" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiNodedotjs />, name: "Node.js" },
];

function Toolstack() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(containerRef.current!);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <Row
      ref={containerRef}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          tabIndex={0}
          className={`tech-icons tool-icon fade-up ${visible ? "visible" : ""}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {tool.icon}
          {/* Optionally show tool.name below */}
          {/* <div className="tool-label">{tool.name}</div> */}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;