import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FlashCard = ({ selectedGrade }) => {

  const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";
  const URL = "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all";
  const MAX_CARDS = 21;

  const [kanjiData, setKanjiData] = useState();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [filteredKanjiData, setFilteredKanjiData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const currentKanji = cardsToRender[currentCardIndex];
  const favorites = useSelector((state)=>state.favorites)

  const iconStyle = {
    fontSize: "20px",
  };

  // gestisce flip della card
  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // gestisce click per passare a card successiva
  const handleNextCardClick = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  // gestisce click su icona cuore per aggiunta ai preferiti
  const handleClick = () => {
    if (clicked) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: currentKanji._id,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: currentKanji,
      });
    }
    setClicked(!clicked);
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

  useEffect(()=> {
    setClicked(false);
    if(favorites.length > 0 && currentKanji ) {
      if(favorites.filter((kanji)=>kanji._id === currentKanji._id).length > 0) {
        setClicked(true);
      }
    }
  }, [currentCardIndex])

  if (!kanjiData) {
    return (
      <div>
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
    <div className="d-flex flex-column justify-content-center mt-5">
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
                      <Row>
                        <Col>
                          <div onClick={handleClick}>
                            {clicked ? (
                              <AiFillHeart style={iconStyle} color="red" />
                            ) : (
                              <AiOutlineHeart style={iconStyle} />
                            )}
                          </div>
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
              <Button
                className="greenButton mt-3 w-50"
                onClick={handleNextCardClick}
              >
                {currentCardIndex === cardsToRender.length - 1
                  ? "Finish"
                  : "Next Card"}
              </Button>
            </>
          );
        })}
    </div>
  );
};

export default FlashCard;
