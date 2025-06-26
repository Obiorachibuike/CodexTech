import React, { useEffect, useRef, useState } from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Science in Chemistry",
    institution: "Federal University Ndufu-Alike",
    duration: "2020 - 2024",
    cgpa: "In Progress",
    details: [
      "Major: Chemistry",
      "Core Courses: Organic Chemistry, Inorganic Chemistry, Physical Chemistry",
      "Research Projects and Lab Work",
    ],
  },
  {
    title: "Web Developer Certification",
    institution: "Florintech Computer College",
    duration: "2021",
    cgpa: "Completed",
    details: [
      "Front-end development fundamentals",
      "HTML, CSS, JavaScript",
      "Building responsive and interactive websites",
    ],
  },
  {
    title: "Secondary High School",
    institution: "Saint Mary's College, Ajangbadi, Lagos, Nigeria",
    duration: "2012 - 2019",
    cgpa: "9.09",
    details: [
      "Based on NCERT curriculum",
      "Secondary Education Completion",
      "Strong foundation in Science and Mathematics",
    ],
  },
];

// ✅ IntersectionObserver hook
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
          if (options.once) observer.unobserve(element);
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isVisible];
};

// ✅ Academic Card
const AcademicCard = ({ edu, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
    once: true,
  });

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      className={`academic-card ${isVisible ? "card-visible" : "card-hidden"}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
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
    once: true,
  });

  return (
    <div className="academics-container">
      <Particle />
      <h1
        ref={titleRef}
        className={`academics-title ${
          titleVisible ? "title-visible" : "title-hidden"
        }`}
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