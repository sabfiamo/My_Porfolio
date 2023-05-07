import "../../styles/pages/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <section className="contact__description">
        <h2 className="contact__name">Hey there!</h2>

        <p className="contact__experience">
          I'm always up for a chat. Pop me an email or if you prefer, connect
          with me on social media. I will answer you as soon as possible. Thanks
          for taking an interest in my work.
        </p>
      </section>
      <section className="contact__information">
        <div>
          <i className="fa-brands fa-github-alt contact__icon"></i>
          <a
            className="contact__path"
            href="https://github.com/sabfiamo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>https://github.com/sabfiamo</span>
          </a>
        </div>
        <div>
          <i className="fa-brands fa-linkedin contact__icon"></i>
          <a
            className="contact__path"
            href="https://www.linkedin.com/in/monica-saborido/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__path">
              https://www.linkedin.com/in/monica-saborido
            </span>
          </a>
        </div>
        <div>
          <i className="fa-regular fa-envelope contact__icon"></i>
          <a
            className="contact__path"
            href="mailto:sabfiamo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__path">sabfiamo@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  );
}
export default Contact;
