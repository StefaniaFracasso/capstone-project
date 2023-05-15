import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoundKanji = ({ foundKanji }) => {
  return (
    <Container className="mt-3">
      <h3 className="text-center">What we found</h3>
      {foundKanji.length > 0 && foundKanji ? (
      <Row className="d-flex mt-5 justify-content-center">
        {foundKanji.map((kanji) => (
          <Col>
          <Link
            to={`/kanji/${kanji.kanji.character}`}
            key={kanji.kanji._id}
            className="foundKanji"
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
