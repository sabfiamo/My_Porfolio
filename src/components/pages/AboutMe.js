import "../../styles/pages/aboutMe.scss";
const photo = require("../../image/monica.jpeg");
const Resume = require("../../image/CV_MonicaSaborido_English.pdf");

function AboutMe() {
  return (
    <div className="aboutMe">
      <section className="aboutMe__description">
        <h2 className="aboutMe__name">Hi! I'm Mónica Saborido.</h2>
        <h3 className="aboutMe__job">Full stack developer.</h3>
        <p className="aboutMe__experience">
          Graduated in Physics starting a new and exciting stage. After a few
          years of hiatus in the world of computing for reasons of family
          reconciliation, I have decided to reinvent myself and give a radical
          change to my life by resuming one of my great passions, programming.
        </p>
        <div className="aboutMe__resume">
          <a className="aboutMe__resume--link" href={Resume} download>
            Download my resume.
          </a>
        </div>
      </section>
      <section className="aboutMe__photo">
        <img src={photo} alt="Photo_Monica_Saborido" />
      </section>
    </div>
  );
}
export default AboutMe;
