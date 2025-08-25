import "./about.css";
import Irfan2Image from "../../assets/images/irfan5.jpg";

function About() {
  return (
    <div id="about" className="about-section">
      <h1 data-aos="fade-up">About</h1>
      <div className="container">
        {/* Image animation */}
        <img
          src={Irfan2Image}
          alt="Muhammad Irfan"
          data-aos="fade-right"
          data-aos-duration="1200"
        />

        {/* Text animation */}
        <div className="sub-container" data-aos="fade-left" data-aos-duration="1200">
          <h3 data-aos="fade-up" data-aos-delay="200">Hello</h3>
          <p data-aos="fade-up" data-aos-delay="400">
            Hello! I’m Muhammad Irfan, a dedicated web developer with a strong
            passion for creating clean, responsive, and interactive websites. I
            specialize in HTML, CSS, JavaScript, and React.js, turning complex
            ideas into simple, user-friendly solutions. I’m constantly learning
            to stay up-to-date with modern web technologies and deliver
            high-quality projects that provide excellent user experience. I’m
            eager to collaborate, take on challenges, and contribute to
            meaningful web development projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
