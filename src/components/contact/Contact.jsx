import "./contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <h1 data-aos="fade-up">Contact Me</h1>
      <form data-aos="fade-up" data-aos-delay="200">
        <div className="input-form" data-aos="fade-right" data-aos-delay="300">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>

        <div className="input-form" data-aos="fade-left" data-aos-delay="400">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Enter your email" required />
        </div>

        <div className="input-form" data-aos="fade-right" data-aos-delay="500">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Type your message here" required></textarea>
        </div>

        <button
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
