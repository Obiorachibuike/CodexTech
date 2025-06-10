import React, { useEffect, useRef, useState } from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Technology",
    institution: "Presidency University, Bengaluru",
    duration: "2021 - Present",
    cgpa: "In Progress",
    details: [
      "Computer Science and Technology",
      "Specialization in AI & ML",
      "Key courses: Data Structures, Algorithms, Machine Learning",
      "Research Projects in AI/ML",
    ],
  },
  {
    title: "Pre-University College",
    institution: "MES Kishora Kendra, Bengaluru",
    duration: "2019 - 2021",
    cgpa: "8.5",
    details: [
      "Physics, Maths, Chemistry, Computer Science",
      "Pre-University Completion",
      "Advanced Mathematics and Computer Science",
    ],
  },
  {
    title: "Secondary High School",
    institution: "Nelamangala, Bengaluru",
    duration: "2012 - 2019",
    cgpa: "9.09",
    details: [
      "Based on NCERT",
      "Secondary Education Completion",
      "Strong foundation in Science"
    ],
  },
];

// Custom hook for IntersectionObserver
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing if needed
          if (options.once) {
            observer.unobserve(element);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Individual Academic Card Component
const AcademicCard = ({ edu, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    once: true // Only animate once
  });

  return (
    <div 
      ref={cardRef}
      className={`academic-card ${isVisible ? 'card-visible' : 'card-hidden'}`}
      style={{
        transitionDelay: `${index * 0.2}s` // Stagger animation
      }}
    >
      <h2>{edu.title}</h2>
      <h3>{edu.institution}</h3>
      <p className="academic-duration">{edu.duration}</p>
      <p className="academic-cgpa">CGPA: {edu.cgpa}</p>
      <ul>
        {edu.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

function Academics() {
  const [titleRef, titleVisible] = useIntersectionObserver({
    threshold: 0.5,
    once: true
  });

  return (
    <div className="academics-container">
      <Particle />
      <h1 
        ref={titleRef}
        className={`academics-title ${titleVisible ? 'title-visible' : 'title-hidden'}`}
      >
        My Academic Journey
      </h1>
      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <AcademicCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Academics;