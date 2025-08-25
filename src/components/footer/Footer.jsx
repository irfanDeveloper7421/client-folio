import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-section" data-aos="fade-up">
      <h1 data-aos="fade-down">M.Irfan</h1>

      <div className="footer-icons" data-aos="zoom-in" data-aos-delay="200">
        <a
          href="https://www.facebook.com/profile.php?id=61574996147042"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://github.com/MuhammadIrfan854"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/frontendirfan2025/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p data-aos="fade-up" data-aos-delay="400">
        © 2025 copyright all right reserved
      </p>
    </div>
  );
};

export default Footer;
