import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";
import "./Techstack.css";

function Techstack() {
  const [isRowVisible, setIsRowVisible] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState(new Set());
  const rowRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === rowRef.current) {
            // Handle row visibility
            if (entry.isIntersecting) {
              setIsRowVisible(true);
            }
          } else {
            // Handle individual icon visibility
            const iconIndex = parseInt(entry.target.dataset.index);
            if (entry.isIntersecting) {
              setVisibleIcons(prev => new Set([...prev, iconIndex]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe the row
    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    // Observe individual icons
    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
      iconRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const techIcons = [
    { Component: CgCPlusPlus, name: "C++" },
    { Component: DiJavascript1, name: "JavaScript" },
    { Component: DiNodejs, name: "Node.js" },
    { Component: DiReact, name: "React" },
    { Component: DiMongodb, name: "MongoDB" },
    { Component: SiNextdotjs, name: "Next.js" },
    { Component: DiGit, name: "Git" },
    { Component: SiHtml5, name: "HTML5" },
    { Component: SiTypescript, name: "TypeScript" },
    { Component: SiMysql, name: "MySQL" },
    { Component: DiPython, name: "Python" },
    { Component: DiJava, name: "Java" },
  ];

  return (
    <Row 
      ref={rowRef}
      className={`techstack-row ${isRowVisible ? 'visible' : ''}`}
      style={{ paddingBottom: "50px" }}
    >
      {techIcons.map(({ Component, name }, index) => (
        <Col 
          xs={4} 
          md={2} 
          key={name}
          ref={el => iconRefs.current[index] = el}
          data-index={index}
        >
          <div className={`tech-icons ${visibleIcons.has(index) ? 'visible' : ''}`}>
            <Component />
            <div className="icon-name">{name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;