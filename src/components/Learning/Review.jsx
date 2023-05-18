import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const Review = () => {
  const savedKanji = useSelector((state) => state.kanjiToBeReviewed);
  console.log("prova", savedKanji);
  const dispatch = useDispatch();

  const handleReviewDoneClick = (kanjiId) => {
    console.log("Clicked on kanji with ID:", kanjiId);
    dispatch({
      type: "REMOVE_REVIEW",
      payload: kanjiId
    });
  };

  return (
    <Container>
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
                  <ListGroup.Item as="li" key={kanji._id} className="d-flex align-items-center">
                    <Link
                      to={`/kanji/${kanji.kanji.character}`}
                      id="savedKanji"
                    >
                      {kanji.kanji.character}
                    </Link>
                    <span onClick={() => handleReviewDoneClick(kanji._id)} className="ms-auto">
                    <i className="bi bi-check2 iconaCheck"></i>
                    </span>
                  </ListGroup.Item>
                );
              })
            ) : (
              <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Review</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                  <h4>It seems you have nothing left to review!</h4>
                </Modal.Body>
        
                <Modal.Footer>
                <Link
                  to={`/`}
                  className="greenButton rounded-pill fw-bold"
                >
                  Homepage
                </Link>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
              // <div className="text-center">
              //   <h4><em>It seems you have nothing left to review!</em></h4>
              // </div>
            )}
          </ListGroup>
        </Col>
        <Col xs={1} md={4}></Col>
      </Row>
    </Container>
  );
};

export default Review;
