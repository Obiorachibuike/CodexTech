import React, { useRef, useEffect, useState } from "react";
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
  SiCss3,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "./Techstack.css"; // Import the CSS file

const icons = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiDocker />, name: "Docker" },
];

function Techstack() {
  const [visibleIcons, setVisibleIcons] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //reveal icons one by one
            const visible = icons.map((icon, index) => index);
            setVisibleIcons(visible);
            observer.unobserve(rowRef.current);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, []);

  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="techstack-row"
      ref={rowRef}
    >
      {icons.map((icon, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className={`tech-icons ${
            visibleIcons.includes(index) ? "visible" : ""
          }`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          {icon.icon}
          <p>{icon.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
