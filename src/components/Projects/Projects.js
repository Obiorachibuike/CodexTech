import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import {
  SiPython,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiMysql,
  SiReact,
} from "react-icons/si";

import oralcancer from "../../Assets/Projects/oralcancer.png";
import paddle from "../../Assets/Projects/paddle.png";
import objecttrack from "../../Assets/Projects/objecttrack.png";
import fraud_Detection from "../../Assets/Projects/fraud_Detection.png";
import ccfraud from "../../Assets/Projects/ccfraud.png";
import LMmodel from "../../Assets/Projects/LMmodel.png";

const defaultImage = LMmodel;

const projects = [
  {
    imgPath: defaultImage,
    title: "HAWC R&D Private Limited",
    description:
      "A simple mobile login/signup app built using React Native (Expo) for seamless user authentication.",
    ghLink: "https://github.com/Obiorachibuike/HAWC-R-D-PRIVATE-LIMITED",
    techIcons: [{ icon: SiReact, name: "React Native" }],
    category: "Mobile",
  },
  {
    imgPath: fraud_Detection,
    title: "Income Tax Fraud Detection",
    description:
      "Detecting fraudulent activities in income tax filings using ML techniques and anomaly detection.",
    ghLink:
      "https://github.com/oxBinaryBrain/An_Income_Tax_Fraud_Detection_Using_AI-ML",
    techIcons: [
      { icon: SiPython, name: "Python" },
      { icon: SiScikitlearn, name: "Scikit-learn" },
      { icon: SiMysql, name: "MySQL" },
    ],
    category: "AI",
  },
  {
    imgPath: LMmodel,
    title: "Multilingual Chatbot",
    description:
      "Chatbot detects input language, translates to English, responds, and translates back to user language.",
    ghLink: "https://github.com/oxBinaryBrain/Multilingual_chatbot",
    techIcons: [
      { icon: SiPython, name: "Python" },
      { icon: SiTensorflow, name: "TensorFlow" },
    ],
    category: "AI",
  },
  {
    imgPath: objecttrack,
    title: "Object Tracking with OpenCV",
    description:
      "Tracks moving objects in videos using the KCF algorithm from OpenCV for efficient detection.",
    ghLink: "https://github.com/oxBinaryBrain/Object_Tracking",
    techIcons: [
      { icon: SiPython, name: "Python" },
      { icon: SiOpencv, name: "OpenCV" },
    ],
    category: "AI",
  },
  {
    imgPath: oralcancer,
    title: "Oral Cancer Detection",
    description:
      "CNN-based model to detect and classify oral cancer from image data using deep learning.",
    ghLink: "https://github.com/oxBinaryBrain/Oral_Cancer_Classification",
    techIcons: [
      { icon: SiPython, name: "Python" },
      { icon: SiPytorch, name: "PyTorch" },
      { icon: SiKeras, name: "Keras" },
    ],
    category: "AI",
  },
  {
    imgPath: ccfraud,
    title: "Credit Card Fraud Detection",
    description:
      "Trained a fraud classifier on Kaggle's credit card dataset to detect suspicious transactions.",
    ghLink: "https://github.com/oxBinaryBrain/CC-Fraud-Detection",
    techIcons: [
      { icon: SiPython, name: "Python" },
      { icon: SiScikitlearn, name: "Scikit-learn" },
    ],
    category: "AI",
  },
  {
    imgPath: paddle,
    title: "Paddle Detection Toolkit",
    description:
      "Real-time object detection and tracking with PaddlePaddle for advanced computer vision.",
    ghLink: "https://github.com/oxBinaryBrain/PaddleDetection",
    demoLink: "https://example.com",
    techIcons: [{ icon: SiPython, name: "Python" }],
    category: "AI",
  },
];

const categories = ["All", "Mobile", "Web", "AI", "Blockchain", "WordPress"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isFading, setIsFading] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const sentinelRef = useRef(null);
  const cardRefs = useRef({});

  const getFilteredProjects = () => {
    if (filter === "All") {
      return projects.slice(0, visibleCount);
    }
    return projects.filter((p) => p.category === filter).slice(0, 3);
  };

  const filteredProjects = getFilteredProjects();

  useEffect(() => {
    setVisibleItems({});
    cardRefs.current = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-key");
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [key]: true }));
            }, parseInt(entry.target.getAttribute("data-delay")) || 0);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.entries(cardRefs.current).forEach(([key, ref]) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(cardRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filter, visibleCount]);

  useEffect(() => {
    if (filter !== "All") return;

    const sentinelObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < projects.length) {
          setVisibleCount((prev) => prev + 3);
        }
      },
      { threshold: 1.0 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) sentinelObserver.observe(sentinel);

    return () => {
      if (sentinel) sentinelObserver.unobserve(sentinel);
    };
  }, [visibleCount, filter]);

  const handleFilterChange = (cat) => {
    if (cat === filter) return;
    setIsFading(true);
    setTimeout(() => {
      setFilter(cat);
      setVisibleCount(6);
      setIsFading(false);
    }, 300);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row className="mb-4 justify-content-center text-center gx-2 gy-2">
          {categories.map((cat) => (
            <Col xs="auto" key={cat}>
              <Button
                className={`category-btn ${filter === cat ? "active" : ""}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </Button>
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => {
            const key = project.title;
            const delay = index * 100;

            return (
              <Col
                md={6}
                lg={4}
                key={key}
                data-key={key}
                data-delay={delay}
                ref={(el) => (cardRefs.current[key] = el)}
              >
                <ProjectCard
                  {...project}
                  visible={visibleItems[key] && !isFading}
                  fadingOut={isFading}
                />
              </Col>
            );
          })}
        </Row>

        {filter === "All" && visibleCount < projects.length && (
          <div
            ref={sentinelRef}
            style={{ height: "30px", margin: "30px auto", width: "100%" }}
          />
        )}
      </Container>
    </Container>
  );
}

export default Projects;