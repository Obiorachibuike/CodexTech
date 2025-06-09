import React from "react";
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
  SiSolidity,
  SiEthereum,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiWeb3Dotjs,
  SiHardhat,
  SiTruffle,
} from "react-icons/si";

function Techstack() {
  const techIcons = [
    CgCPlusPlus,
    DiJavascript1,
    SiTypescript,
    DiNodejs,
    SiExpress,
    DiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    DiMongodb,
    SiMysql,
    DiGit,
    SiHtml5,
    DiPython,
    DiJava,
    SiSolidity,
    SiEthereum,
    SiWeb3Dotjs,
    SiHardhat,
    SiTruffle,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;