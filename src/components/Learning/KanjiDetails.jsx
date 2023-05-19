import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import ReactPlayer from 'react-player'

const KanjiDetails = () => {
  const [kanjiDetails, setKanjiDetails] = useState({});
  const { kanjiChar } = useParams();
  const DETAILS_URL = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanjiChar}`;
  const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";

  const getSingleKanjiDetails = async () => {
    try {
      const response = await fetch(DETAILS_URL, {
        headers: {
          "x-rapidapi-key": API_KEY,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setKanjiDetails(data);
      } else {
        alert("error fetching results");
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getSingleKanjiDetails();
  }, [kanjiChar]);



  if (!kanjiDetails) {
    return (
      <div>
        <SpinnerDotted
          size={90}
          thickness={100}
          speed={100}
          color="rgba(43, 92, 98, 1)"
        />
      </div>
    );
  }

  return (
    <Container className="detailsBigContainer my-5">
      <Row>
        <Col xs={1} md={2}></Col>
        <Col>
      <Row>
        <Col
          xs={12}
          md={4}
          lg={4}
          className="p-1"
        >
          <div className="detailsSmallContainer h-100 d-flex flex-column align-items-center shadow">
          <p className="display-1">{kanjiDetails?.ka_utf}</p>
          <ReactPlayer url={kanjiDetails.kanji?.video?.mp4} width={"120px"} height={"120px"}playing={"true"} loop={"true"}/>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} className="p-1">
          <div className="detailsSmallContainer h-100 px-2 shadow">
          <h5 className="fw-bold">Grade</h5>
          <p>{kanjiDetails?.grade}</p>
          <h5 className="fw-bold">Meaning</h5>
          <p>{kanjiDetails?.meaning}</p>
          <h5 className="fw-bold">Kunyomi</h5>
          <p>{kanjiDetails?.kunyomi_ja}</p>
          <h5 className="fw-bold">Onyomi</h5>
          <p>{kanjiDetails?.onyomi_ja}</p>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} className="p-1">
        <div className="detailsSmallContainer h-100 px-2 shadow">
          

          <h5 className="fw-bold">Examples</h5>
          {kanjiDetails.examples && kanjiDetails.examples.length > 0 ? (
            kanjiDetails.examples.slice(0, 4).map((example) => {
              return (
                <>
                  <p className="mb-0">{example.japanese}</p>
                  <p>{example.meaning.english}</p>
                </>
              );
            })
          ) : (
            <p>No examples available.</p>
          )}
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col xs={12} md={6} className="p-1">
          <div className="detailsSmallContainer h-100 px-2 shadow">
          
          <h5 className="fw-bold">Strokes order</h5>
          {kanjiDetails.kanji?.strokes?.images ? (
            kanjiDetails.kanji.strokes.images.map((image) => {
              return (
                <span>
                  <img src={image} alt="" style={{ width: "50px" }} />
                </span>
              );
            })
          ) : (
            <p>No stroke order available.</p>
          )}
          </div>
        </Col>
        <Col xs={12} md={6} className="p-1">
        <div className="detailsSmallContainer h-100 px-2 shadow">

          <h5 className="fw-bold">Radical</h5>
          {kanjiDetails.radical && kanjiDetails.radical.image ? (
            <>
              <img
                src={kanjiDetails.radical.image}
                alt=""
                style={{ width: "30px" }}
                className="mb-2"
              />
              <p className="mb-0">{kanjiDetails.radical.name.hiragana}</p>
              <p>{kanjiDetails.radical.meaning.english}</p>
            </>
          ) : (
            <p>No radical information available.</p>
          )}
          </div>
        </Col>
      </Row>
        </Col>
        <Col xs={1} md={2}></Col>
      </Row>
    </Container>
  );
};

export default KanjiDetails;
