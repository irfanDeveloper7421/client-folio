import "./home.css";
import IrfanImage from "../../assets/images/M.Irfan.jpg";

function Home() {
  return (
    <div id="home" className="home-section">
      {/* Left Section */}
      <div className="left" data-aos="fade-right">
        <div className="left-text">
          <h1 data-aos="fade-up">
            Hi, I'm <span>Muhammad Irfan</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Frontend Web Developer
          </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            Hi, I’m Muhammad Irfan — a creative web developer who loves building
            sleek, interactive, and user-friendly websites. I turn ideas into
            digital experiences that are not only functional but also visually
            appealing. Explore my work, see what I can create, and let’s build
            something amazing together!
          </p>
        <a href="#contact"><button data-aos="zoom-in" data-aos-delay="600">Contact</button></a>
        </div>

        <ul className="social-icons" data-aos="fade-up" data-aos-delay="800">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61574996147042"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/frontendirfan2025/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MuhammadIrfan854"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right" data-aos="fade-left">
        <img src={IrfanImage} alt="M.Irfan" />
      </div>
    </div>
  );
}

export default Home;
