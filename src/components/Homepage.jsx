import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "./Homepage/Jumbotron";
import AppDescription from "./Homepage/AppDescription";
import BlogSection from "./Homepage/BlogSection";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <Jumbotron />
        </Col>
        <Col xs={12} className="p-0">
          <AppDescription />
        </Col>
        <Col xs={12} className="p-0">
          <BlogSection/>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
