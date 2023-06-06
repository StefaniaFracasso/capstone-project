import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="d-flex flex-column justify-content-center">
          <Col xs={12} className="text-center">
            <img
              src="/assets/perapera-logo.png"
              alt="logo"
              style={{ width: "100px" }}
            />
          </Col>
          <Col xs={12} className="text-center">
            <i className="bi bi-instagram socialIcons"></i>
            <i className="bi bi-facebook socialIcons"></i>
            <a href="https://www.linkedin.com/in/stefaniafracasso/" target='_blank' rel="noreferrer">
            <i className="bi bi-linkedin socialIcons"></i>
            </a>
          </Col>
          <hr className="mt-2 text-light"/>
          <Col xs={12} className="text-center mt-1">
            <p style={{color: "#EDECE3"}}><em>Copyright @StefaniaFracasso, Credits to KanjiAlive | {currentYear}</em></p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
