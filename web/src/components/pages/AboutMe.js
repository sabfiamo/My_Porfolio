import "../../styles/pages/aboutMe.scss";
const serverPort = process.env.PORT || 4000;
let Resume = require("../../image/CV_MonicaSaborido_English.pdf");

console.log(`Server listening at http://localhost:${serverPort}`);

function AboutMe() {
  return (
    <div className="aboutMe__container">
      <section className="aboutMe__description">
        <h2 className="aboutMe__name">Mónica Saborido</h2>
        <h3 className="aboutMe__job">Full stack developer</h3>
        <p className="aboutMe__experience">
          Graduated in Physics starting a new and exciting stage. After a few
          years of hiatus in the world of computing for reasons of family
          reconciliation, I have decided to reinvent myself and give a radical
          change to my life by resuming one of my great passions, programming.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          quidem tempore soluta, necessitatibus odio voluptates accusamus
          quibusdam laborum! Accusamus molestias mollitia minima soluta
          consequuntur facere ipsa corrupti eius quaerat debitis.
        </p>
        <div className="aboutMe__resume">
          <a
            className="aboutMe__resume--link"
            href={Resume}
            // href={`http://localhost:${serverPort}/CV_MonicaSaborido_English.pdf`}
            download
          >
            Download my resume.
          </a>
        </div>
      </section>
      <section className="aboutMe__photo"></section>
    </div>
  );
}
export default AboutMe;
