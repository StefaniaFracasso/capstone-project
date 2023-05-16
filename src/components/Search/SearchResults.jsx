import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FoundKanji from "./FoundKanji";

const SearchResults = () => {
  const [foundKanji, setFoundKanji] = useState([]);
  const { query } = useParams();
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const SEARCH_URL = `https://kanjialive-api.p.rapidapi.com/api/public/search/${query}`;
    const API_KEY = "28ff1f0abfmshb76c2038e44651cp10501djsn60f00a062f0b";

    const fetchData = async () => {
      try {
        const response = await fetch(SEARCH_URL, {
            headers: {
                "x-rapidapi-key": API_KEY,
              },
        });
        if (response.ok) {
          const data = await response.json();
          if(data.length > 0) {
            setFoundKanji(data);
            setNoResults(false);
          }else {
            setNoResults(true);
          }
        } else {
          alert("error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <Container className="searchResultsContainer">
      <Row className="d-flex justify-content-center">
        <Col xs={1} md={2}></Col>
        <Col xs={10} md={8}>
        <h3 className="text-center my-4 pt-3">What we found for <em>{query}</em>: </h3>
        {noResults ? (<p>No kanji found :(</p>) : (
          <FoundKanji foundKanji={foundKanji} />
        )}
        </Col>
        <Col xs={1} md={2}></Col>
      </Row>
    </Container>
  );
};

export default SearchResults;