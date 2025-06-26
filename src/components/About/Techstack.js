import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiSass,
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiRedux,
  SiDocker,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiFirebase,
  SiAmazonaws,
  SiVuedotjs,
  SiExpress,
  SiNestjs,
  SiSolidity,
  SiWeb3Dotjs,
  SiTruffle,
  SiIpfs,
  SiChainlink,
  SiEthers,
  SiRedis,
  SiVercel,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import "./Techstack.css";

const icons = [
  <DiHtml5 />,
  <DiSass />,
  <DiJavascript1 />,
  <SiTypescript />,
  <DiReact />,
  <SiNextdotjs />,
  <SiVuedotjs />,
  <SiTailwindcss />,
  <DiBootstrap />,
  <DiGit />,
  <DiNodejs />,
  <SiExpress />,
  <SiNestjs />,
  <DiMongodb />,
  <SiMysql />,
  <SiPostgresql />,
  <SiRedis />,
  <SiFirebase />,
  <DiPython />,
  <DiJava />,
  <CgCPlusPlus />,
  <SiGraphql />,
  <SiDocker />,
  <SiAmazonaws />,
  <SiVercel />,
  <SiSolidity />,
  <SiTruffle />,
  <SiWeb3Dotjs />,
  <SiEthers />,
  <SiIpfs />,
  <SiChainlink />,
];

function Techstack() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          setVisible(true);
          observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Row
      ref={containerRef}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      {icons.map((IconComponent, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className={`tech-icons fade-up ${visible ? "visible" : ""}`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {IconComponent}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;