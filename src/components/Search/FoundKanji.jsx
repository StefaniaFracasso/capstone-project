import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoundKanji = ({ foundKanji }) => {
  return (
    <Container className="mt-3">
      {foundKanji.length > 0 && foundKanji ? (
      <Row className="d-flex mt-5 justify-content-center">
        {foundKanji.map((kanji) => (
          <Col key={kanji.kanji._id}
          >
          <Link
            to={`/kanji/${kanji.kanji.character}`}
            className="foundKanji display-4 border border-2"
          >
            {kanji.kanji.character}
          </Link>
          </Col>
        ))}
      </Row>
      ) : (<p className="text-center mt-5">No kanji found :(</p>)}
    </Container>
  );
};

export default FoundKanji;
