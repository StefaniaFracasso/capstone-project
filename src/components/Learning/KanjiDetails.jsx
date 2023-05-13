import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

const KanjiDetails = () => {
    const [kanjiDetails, setKanjiDetails] = useState({});
    const { kanjiChar } = useParams();
    const DETAILS_URL = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanjiChar}`;
const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";

const getSingleKanjiDetails = async () => {
    try {
        const response = await fetch (DETAILS_URL, {
            headers: {
                "x-rapidapi-key": API_KEY,
            }
        })
        if (response.ok) {
            const data = await response.json();
  console.log(data)
  setKanjiDetails(data)
        }else {
            alert("error fetching results");
        }
    }catch {
        console.log("error");
    }
}  

useEffect(() => {
    getSingleKanjiDetails()
}, [kanjiChar])

if (!kanjiDetails) {
    return <div>
      <SpinnerDotted size={90} thickness={100} speed={100} color="rgba(43, 92, 98, 1)" />
    </div>;
  }
  return (
    <Container className="detailsBigContainer">
      <Row className="d-flex justify-content-between">
        <Col xs={12} md={4} lg={4} className="detailsSmallContainer">
          <h3>{kanjiDetails?.ka_utf}</h3>
        </Col>
        <Col xs={12} md={4} lg={4} className="detailsSmallContainer">
          <h5>Grade</h5>
          <p>{kanjiDetails?.grade}</p>
          <h5>Meaning</h5>
          <p>{kanjiDetails?.meaning}</p>
          <h5>Kunyomi</h5>
          <p>{kanjiDetails?.kunyomi_ja}</p>
          <h5>Onyomi</h5>
          <p>{kanjiDetails?.onyomi_ja}</p>
        </Col>
        <Col xs={12} md={4} lg={4} className="detailsSmallContainer">
          <h5>Examples</h5>
           {kanjiDetails.examples.map((example)=>{
            console.log(example)
            return (
                <>
                <p>{example.japanese}</p>
                <p>{example.meaning.english}</p>
                </>
            )
          })} 
          <p>Esempio giapponese con hover traduzione inglese</p>
        </Col>
      </Row >
      <Row className="d-flex justify-content-around">
      <Col xs={12} md={6} className="detailsSmallContainer">
          <h5>Strokes order</h5>
        {kanjiDetails.kanji.strokes.images.map((image)=>{
            return(
                <span><img src={image} alt="" style={{width: "50px"}} /></span>
            )
        })}
      </Col>
      <Col xs={12} md={6} className="detailsSmallContainer">
        <img src={kanjiDetails.radical.image} alt="" style={{width: "50px"}} />
        <p>{kanjiDetails.radical.name.hiragana}</p>
        <p>{kanjiDetails.radical.meaning.english}</p>
      </Col>
      </Row>
    </Container>
  );
};

export default KanjiDetails;
