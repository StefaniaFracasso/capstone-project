import { Col, Container, Row } from "react-bootstrap";
import FlashCard from "./FlashCard";
import { useParams } from "react-router-dom";

const LearningPage = () => {
  const { grade } = useParams();

  return (
    <Container>
      <Row className="d-flex flex-column">
        <Col>
          <FlashCard selectedGrade={grade} />
        </Col>
        <Col className="pt-3 px-xs-none px-md-5">
          <p>
            Here you can study the kanji of your chosen level. By clicking on
            the card you can see the translation of the selected kanji. If you
            don't know it, don't worry! Click on "Don't know" to save it and
            review it later in the review section :)
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningPage;
