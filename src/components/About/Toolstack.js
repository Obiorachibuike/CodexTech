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
import "./Toolstack.css"; // Custom styles

const tools = [
  <SiWindows />,
  <SiVisualstudiocode />,
  <SiPostman />,
  <SiVercel />,
  <SiGithub />,
  <SiFigma />,
  <SiDocker />,
  <SiNotion />,
  <SiSlack />,
  <SiNodedotjs />,
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
      {tools.map((Icon, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className={`tech-icons tool-icon fade-up ${visible ? "visible" : ""}`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {Icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;