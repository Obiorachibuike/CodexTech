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

function Techstack() {
  const [visibleIcons, setVisibleIcons] = useState(new Set());
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iconIndex = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIcons(prev => new Set([...prev, iconIndex]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
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
    <>
      <style jsx>{`
        .tech-icon-container {
          opacity: 0;
          transform: translateY(30px) scale(0.8);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .tech-icon-container.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .tech-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          margin: 10px 0;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .tech-icons::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .tech-icons:hover::before {
          left: 100%;
        }
        
        .tech-icons:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .tech-icons svg {
          font-size: 3rem;
          color: #61dafb;
          transition: all 0.3s ease;
        }
        
        .tech-icons:hover svg {
          color: #21a9c7;
          transform: scale(1.1);
        }
      `}</style>
      
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techIcons.map(({ Component, name }, index) => (
          <Col 
            xs={4} 
            md={2} 
            key={name}
            ref={el => iconRefs.current[index] = el}
            data-index={index}
            className={`tech-icon-container ${visibleIcons.has(index) ? 'visible' : ''}`}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <div className="tech-icons" title={name}>
              <Component />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;