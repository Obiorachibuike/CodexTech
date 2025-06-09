import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiHtml5,
} from "react-icons/di";
import {
  SiNextdotjs, SiMysql, SiTypescript, SiSolidity, SiEthereum, SiTailwindcss,
  SiRedux, SiExpress, SiWeb3Dotjs, SiEthers, SiHardhat, SiTruffle,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import "./Techstack.css"; // 👈 create this file for animations

function Techstack() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Row
      ref={ref}
      className={`techstack-row ${isVisible ? "visible" : ""}`}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      {[
        <DiJavascript1 />, <SiTypescript />, <DiNodejs />, <SiExpress />,
        <DiReact />, <SiNextdotjs />, <SiRedux />, <SiTailwindcss />,
        <DiMongodb />, <SiMysql />, <DiGit />, <DiHtml5 />, <CgCPlusPlus />,
        <DiPython />, <DiJava />, <SiSolidity />, <SiEthereum />, <SiEthers />,
        <SiWeb3Dotjs />, <SiHardhat />, <SiTruffle />,
      ].map((Icon, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          {Icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;