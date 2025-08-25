import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import firstSite from "../../assets/images/firstSite.png";
import secondSite from "../../assets/images/secondSite.png";
import "./project.css"

const projectData = [
  {
    img: firstSite,
    title: "TastyBites – Restaurant Website",
    description: "A modern and fully responsive food website built with HTML, CSS, and JavaScript. Perfect for restaurants, cafes, or food businesses to showcase their menu and attract customers.",
    live: "https://tastybitesbyirfan-qhy9ylqcy-muhmmad-irfans-projects.vercel.app/",
    code: "https://github.com/MuhammadIrfan854/TastyBites/tree/main"
  },
  {
    img: secondSite,
    title: "E-Commerce UI",
    description: "E-commerce layout with filtering, search, and cart features.",
    live: "https://your-live-link2.com",
    code: "https://github.com/MuhammadIrfan854/Ell-Style"
  },
  {
    img: firstSite,
    title: "Portfolio Website",
    description: "My personal web developer portfolio with contact & resume.",
    live: "https://your-portfolio.com",
    code: "https://github.com/your/portfolio"
  },
  {
    img: firstSite,
    title: "Admin Dashboard",
    description: "Interactive dashboard with charts, tables, and analytics.",
    live: "https://your-dashboard.com",
    code: "https://github.com/your/dashboard"
  }
];

function Projects() {
  return (
    <div id="projects">
      <h1 data-aos="fade-up">My Projects</h1>
      <div className="project-page">{projectData.map((project, index) => (
          <div className="project" key={index} data-aos="zoom-in"  data-aos-delay="100">
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaCode /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
