import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <b className="purple">Chibuike Praise Obiora</b>, a passionate developer dedicated to building elegant, functional web and blockchain solutions.
              <br />
              <br />I'm proficient in languages like
              <i>
                <b className="purple"> JavaScript, TypeScript,Python, PHP and Solidity</b>
              </i>, and I love working with modern tools and frameworks.
              <br />
              <br />
              My interests include developing innovative&nbsp;
              <i>
                <b className="purple">Web Apps, Smart Contracts, and DeFi Platforms</b>
              </i>
              , especially using technologies like{" "}
              <b className="purple">React.js, Next.js,Django, Flask, Fast Api and Node.js</b>.
              <br />
              <br />
              I’m always eager to contribute to meaningful projects and collaborate with passionate teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Connect with <span className="purple">me</span> online
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/obiorachibuike"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/obiorachibuike"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/obiorachibuike"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
