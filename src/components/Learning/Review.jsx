import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Review = () => {
  const savedKanji = useSelector((state) => state.kanjiToBeReviewed);
  console.log("prova", savedKanji);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleReviewDoneClick = (kanjiId) => {
    console.log("Clicked on kanji with ID:", kanjiId);
    dispatch({
      type: "REMOVE_REVIEW",
      payload: kanjiId,
    });
  };

  return (
    <Container className="reviewContainer">
      <h2 className="text-center my-3">Review time!</h2>
      <h5 className="text-center my-3">
        Here you can find all the kanji that you saved during learning with the
        flashcards.
      </h5>
      <Row className="d-flex mb-5">
        <Col xs={1} md={4}></Col>
        <Col xs={10} md={4}>
          <Row className="d-flex flex-column">
            <Col>
              <ListGroup as="ol" numbered className="mt-3">
                {savedKanji.length > 0 && savedKanji ? (
                  savedKanji.map((kanji) => {
                    return (
                      <ListGroup.Item
                        as="li"
                        key={kanji._id}
                        className="d-flex align-items-center"
                      >
                        <Link
                          to={`/kanji/${kanji.kanji.character}`}
                          state={{ from: location.pathname }}
                          id="savedKanji"
                        >
                          {kanji.kanji.character}
                        </Link>
                        <span
                          onClick={() => handleReviewDoneClick(kanji._id)}
                          className="ms-auto"
                        >
                          <i className="bi bi-check2 iconaCheck"></i>
                        </span>
                      </ListGroup.Item>
                    );
                  })
                ) : (
                  <Card className="text-center shadow">
                    <Card.Header>
                      <i className="bi bi-exclamation-triangle-fill alertIcon"></i>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className="mb-4">
                        It seems you have nothing left to review!
                      </Card.Title>
                      <Link
                        to={`/`}
                        className="greenButton rounded-pill fw-bold shadow"
                      >
                        Homepage
                      </Link>
                    </Card.Body>
                  </Card>
                )}
              </ListGroup>
            </Col>
            <Col>
            {savedKanji.length > 0 && savedKanji ? (
              <p className="mt-3 functionCard p-4">
                Review kanji that still need more study to memorize! <br /> If
                you click on the kanji you will see its details, including
                examples and order of strokes. <br />
                When you are confident that you have mastered it click on the
                checkmark to remove it from the Review section!
              </p>
            ): null}
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={4}></Col>
      </Row>
    </Container>
  );
};

export default Review;
