import { Col, Container, Row } from "react-bootstrap";
import FlashCard from "./FlashCard";
import { useParams } from "react-router-dom";

const LearningPage = () => {
  const { grade } = useParams();

  return (
    <Container>
      <Row className="d-flex flex-column">
        <Col className="mb-3 flex-grow-1">
          <FlashCard selectedGrade={grade} />
        </Col>
        <Col xs={12} md={8} className=" d-flex mx-auto my-3 pt-3 functionCard">
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
