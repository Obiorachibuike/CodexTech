import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            🚀 Hey there! I’m <span className="purple">Chibuike Praise Obiora</span> —
            a passionate <span className="purple">Full Stack Developer</span> and
            a dedicated <span className="purple">Crypto & Forex Trader</span> from <span className="purple">Nigeria</span>.
            <br />
            <br />
            I live at the intersection of code and capital — building powerful web applications
            while navigating the dynamic world of financial markets.
            <br />
            <br />
            Whether I’m crafting scalable tech with <b className="purple">React, Next.js, and Node.js</b>, 
            or charting trends in <b className="purple">Bitcoin, Ethereum, and the Forex market</b>,
            I bring precision, passion, and performance to everything I do.
            <br />
            <br />
            When I’m not coding or trading, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Diving into Blockchain innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Analyzing market trends & price action
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music and vibing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading self-growth and tech books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Discipline builds traders. Passion builds developers. I choose both."{" "}
          </p>
          <footer className="blockquote-footer">— Chibuike Praise Obiora</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;