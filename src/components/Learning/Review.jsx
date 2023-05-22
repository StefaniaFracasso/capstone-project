import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Review = () => {
  const savedKanji = useSelector((state) => state.kanjiToBeReviewed);
  console.log("prova", savedKanji);
  const dispatch = useDispatch();

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
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
              >
                <Modal.Dialog>
                  <Modal.Header>
                    <Modal.Title>
                      <i className="bi bi-exclamation-triangle-fill alertIcon"></i>
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <h4>It seems you have nothing left to review!</h4>
                  </Modal.Body>

                  <Modal.Footer>
                    <Link
                      to={`/`}
                      className="greenButton rounded-pill fw-bold shadow"
                    >
                      Homepage
                    </Link>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            )}
          </ListGroup>
        </Col>
        <Col xs={1} md={4}></Col>
      </Row>
      <div className="d-flex justify-content-center mx-xs-none mx-md-5">
        <p className="mt-3">
          Review kanji that still need more study to memorize! <br /> If
          you click on the kanji you will see its details, including examples
          and order of strokes. <br />
          When you are confident that you have mastered it click on the
          checkmark to remove it from the Review section!
        </p>
      </div>
    </Container>
  );
};

export default Review;
