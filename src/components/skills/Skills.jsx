import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 data-aos="fade-up">Skills</h1>
      <div className="skills-section">
        {skills.map((skill, index) => (
          <div
            className="icon"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150} // delay for staggered effect
          >
            <div className="transform">
              {React.cloneElement(skill.icon, { size: 50, color: skill.color })}
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
