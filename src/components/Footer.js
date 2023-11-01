import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/download.svg";
import navIcon4 from "../assets/img/document.svg";
export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{ color: "white" }}>
              <strong>HAMZA</strong>
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/HamzaAziz-1" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hamza-aziz"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://drive.google.com/file/d/1q1-eCrTUhR2TqSc02FYTDAJpFbnEk2a-/view?usp=sharing"
                target="_blank"
              >
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.fiverr.com/hamzaaaziz" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
