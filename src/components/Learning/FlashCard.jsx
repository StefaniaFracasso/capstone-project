import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";

const FlashCard = ({ selectedGrade }) => {
  const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";
  const URL = "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";
  const MAX_CARDS = 11;

  const [kanjiData, setKanjiData] = useState();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [filteredKanjiData, setFilteredKanjiData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const currentKanji = cardsToRender[currentCardIndex];
  const kanjiToBeReviewed = useSelector((state) => state.kanjiToBeReviewed);


  // gestisce flip della card
  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // gestisce click per passare a card successiva
  const handleNextCardClick = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  // gestisce click per passare a card precedente
  const handlePrevCardClick = () => {
    setCurrentCardIndex(currentCardIndex - 1);
  };

  // apre modale risultati
  const handleFinishClick = () => {
    setShowModal(true);
  };

  // chiude modale
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // gestisce click su "don't know" per salvare i kanji da rivedere, se è già presente non lo salva
  const handleClickReview = () => {
    const isDuplicate = kanjiToBeReviewed.find(
      (kanji) => kanji._id === currentKanji._id
    );

    if (!isDuplicate) {
      dispatch({
        type: "ADD_REVIEW",
        payload: currentKanji,
      });
    }
  };

  // fetch per recupero dati
  const getKanjiData = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          "x-rapidapi-key": API_KEY,
        },
      });
      const data = await response.json();
      console.log(data);
      setKanjiData(data);
    } catch (error) {
      console.error(error);
    }
  };


  // fa partire fetch
  useEffect(() => {
    getKanjiData();
  }, []);

  // partendo dall'array iniziale di 1400 elementi, filtra i kanji in base al grado
  useEffect(() => {
    if (kanjiData) {
      const filteredData = kanjiData.filter(
        // eslint-disable-next-line eqeqeq
        (kanji) => kanji.grade == selectedGrade
      );
      setFilteredKanjiData(filteredData);
      console.log("grade", selectedGrade);
      console.log("data", filteredData);
    }
  }, [kanjiData, selectedGrade]);

  // partendo dai kanji filtrati in base al dato, fa uno slice per visualizzarne solo 20
  useEffect(() => {
    if (filteredKanjiData) {
      setCardsToRender(filteredKanjiData.slice(0, MAX_CARDS));
    }
  }, [filteredKanjiData]);

  if (!kanjiData) {
    return (
      <div className="text-center mt-4 learningContainer">
        <SpinnerDotted
          size={90}
          thickness={100}
          speed={100}
          color="rgba(43, 92, 98, 1)"
          className="mt-5"
        />
      </div>
    );
  }

  return (
    <Container
      fluid
      className="d-flex flex-column align-content-center align-items-center mt-4 learningContainer"
    >
      {showModal && (
        <Modal
          show={showModal}
          onHide={() => {
            handleCloseModal();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Level {selectedGrade} completed!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {kanjiToBeReviewed.length > 0 && kanjiToBeReviewed ? (
              <>
                <p>These are the kanji you don't know:</p>
                <Row className="d-flex">
                  {kanjiToBeReviewed.map((kanji) => (
                    <Col>
                      <h4 key={kanji._id}>{kanji.kanji.character}</h4>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <p>
                Congratulations! You already know all the kanji for this level.
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal} className="greenButton">
              Close
            </Button>
            {kanjiToBeReviewed.length > 0 && kanjiToBeReviewed? (
            <Button href="/review" className="yellowButton">
              Go to Review
            </Button>
            ): 
            <Button href="/" className="yellowButton">
            Back to Homepage
          </Button>
            }
          </Modal.Footer>
        </Modal>
      )}
      <Row>
        <Col className="d-flex align-items-center p-0">
          {currentCardIndex > 0 ? (
            <i
              className="bi bi-arrow-left-circle cardIcon"
              onClick={handlePrevCardClick}
            ></i>
          ) : null}
        </Col>
        <Col>
          {cardsToRender
            .slice(currentCardIndex, currentCardIndex + 1)
            .map((kanji) => {
              return (
                <>
                  <ReactCardFlip
                    isFlipped={isFlipped}
                    flipDirection="horizontal"
                  >
                    {/* FRONT */}
                    <Card
                      key={kanji._id}
                      style={{ width: "250px", height: "300px" }}
                      className="shadow"
                    >
                      <Card.Header className="h6">
                        Level {kanji.grade}
                      </Card.Header>
                      <Card.Body>
                        <Container>
                          <Row
                            className="d-flex flex-column justify-content-center align-items-center"
                            onClick={handleFlip}
                          >
                            <Col>
                              <h2 className="display-1 text-center">
                                {kanji.kanji.character}
                              </h2>
                            </Col>
                            <Col>
                              <h6 className="text-center">
                                <em>Kunyomi: </em>
                                {kanji.kanji.kunyomi.hiragana}
                              </h6>
                            </Col>
                            <Col>
                              <h6 className="text-center mb-5">
                                <em>Onyomi: </em>
                                {kanji.kanji.onyomi.katakana}
                              </h6>
                            </Col>
                          </Row>
                        </Container>
                      </Card.Body>
                    </Card>
                    {/* BACK */}
                    <Card
                      key={kanji._id}
                      style={{ width: "250px", height: "300px" }}
                      onClick={handleFlip}
                    >
                      <Card.Header className="h6">
                        Level {kanji.grade}
                      </Card.Header>
                      <Card.Body>
                        <Row className="d-flex flex-column justify-content-center align-content-center">
                          <Col>
                            <h4 className="text-center">
                              {kanji.kanji.meaning.english}
                            </h4>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </ReactCardFlip>
                </>
              );
            })}
          <Col xs={12} className="mt-4 d-flex justify-content-around">
            <span>
              <Button
                className="yellowButton shadow"
                onClick={handleClickReview}
              >
                Don't know ({kanjiToBeReviewed.length})
              </Button>
            </span>
          </Col>
        </Col>
        <Col className="d-flex align-items-center p-0">
          <i
            className="bi bi-arrow-right-circle cardIcon"
            onClick={
              currentCardIndex === cardsToRender.length - 1
                ? handleFinishClick
                : handleNextCardClick
            }
          ></i>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashCard;
