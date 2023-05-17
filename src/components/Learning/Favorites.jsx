import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

const Favorites = () => {
  const savedKanji = useSelector((state) => state.favorites);

  return (
    <Container>
      <h2 className="text-center my-3">Review time!</h2>
      <h5 className="text-center my-3">Here you can find all the kanji that you saved during learning with the flashcards.</h5>
      <Row className="d-flex mb-5">
        <Col xs={1} md={4}></Col>
        <Col xs={10} md={4}>
      <ListGroup as="ol" numbered className="mt-3">
        {savedKanji.length > 0 && savedKanji ? (
          savedKanji.map((kanji) => {
            return (
              <ListGroup.Item as="li" key={kanji.kanji._id}>
                <Link to={`/kanji/${kanji.kanji.character}`} id="savedKanji">
                  {kanji.kanji.character}
                </Link>
              </ListGroup.Item>
            );
          })
        ) : (
          <div>
            <SpinnerDotted
              size={90}
              thickness={100}
              speed={100}
              color="rgba(43, 92, 98, 1)"
              className="mt-5"
            />
          </div>
        )}
      </ListGroup>
        </Col>
        <Col xs={1} md={4}></Col>
      </Row>
    </Container>
  );
};

export default Favorites;
