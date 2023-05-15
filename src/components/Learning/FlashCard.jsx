import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { SpinnerDotted } from 'spinners-react';

const FlashCard = ({selectedGrade}) => {
  const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";
  const URL = "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";
  const MAX_CARDS = 21;
  const [kanjiData, setKanjiData] = useState();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [filteredKanjiData, setFilteredKanjiData] = useState([]);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleNextCardClick = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

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

  useEffect(() => {
    getKanjiData();
  }, []);

  useEffect(() => {
    if (kanjiData) {
      const filteredData = kanjiData.filter((kanji) => kanji.grade === selectedGrade);
      setFilteredKanjiData(filteredData);
    }
  }, [kanjiData, selectedGrade]);

  useEffect(() => {
    if (filteredKanjiData) {
      setCardsToRender(filteredKanjiData.slice(0, MAX_CARDS));
    }
  }, [filteredKanjiData]);

  if (!kanjiData) {
    return <div>
      <SpinnerDotted size={90} thickness={100} speed={100} color="rgba(43, 92, 98, 1)" />
    </div>;
  }

  return (
    <div>
    {!selectedGrade ? (<h3>Choose a level to begin!</h3>): (
    <div className="d-flex flex-column justify-content-center">
      {cardsToRender
        .slice(currentCardIndex, currentCardIndex + 1)
        .map((kanji) => {
          // console.log("kanji", kanji);
          return (
            <>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* FRONT */}
                <Card
                  key={kanji._id}
                  style={{ width: "250px", height: "300px" }}
                >
                  <Card.Header className="h6">Level {kanji.grade} </Card.Header>
                  <Card.Body>
                    <Container>
                      <Row className="d-flex flex-column justify-content-center align-items-center"  onClick={handleFlip}>
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
                      <Row>
                        <Col>
                          <i className="bi bi-heart text-end"></i>
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
                  <Card.Header className="h6">Level {kanji.grade} </Card.Header>
                  <Card.Body>
                    <Row className="d-flex flex-column justify-content-center align-items-center">
                      <Col>
                        <h4 className="text-center">
                          {kanji.kanji.meaning.english}
                        </h4>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </ReactCardFlip>
              <Button className="greenButton mt-3 w-50" onClick={handleNextCardClick}>
                {" "}
                {currentCardIndex === cardsToRender.length - 1
                  ? "Finish"
                  : "Next Card"}
              </Button>
            </>
          );
        })}
    </div>
    )}
    </div>
  );
};

export default FlashCard;
