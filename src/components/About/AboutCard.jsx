
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";
import { IoArrowRedoOutline } from "react-icons/io5";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parist Sadomthian </span>
            from <span className="purple"> Thailand.</span>
            <br />
            I am a software developer.
            <br />
            I graduated from Bangkok University, Faculty of Information Technology and Innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoArrowRedoOutline /> Playing Games
            </li>
            <li className="about-activity">
              <IoArrowRedoOutline /> Playing Batmintion
            </li>
            <li className="about-activity">
              <IoArrowRedoOutline /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Strive to build things that make a difference!&quot;{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
