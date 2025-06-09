import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chibuike Praise Obiora</span>
            from <span className="purple">Nigeria.</span>
            <br />
            I'm a passionate developer focused on Web3, Full Stack Development, and creating impactful digital products.
            <br />
            I love learning new technologies and building things that matter.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain Innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Following Forex & Crypto Markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading About Tech and Startups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion."{" "}
          </p>
          <footer className="blockquote-footer">Chibuike Praise Obiora</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;