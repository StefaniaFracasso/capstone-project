import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FoundKanji from "./FoundKanji";

const SearchResults = () => {
  const [foundKanji, setFoundKanji] = useState([]);
  const { query } = useParams();

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
          setFoundKanji(data);
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
    <Container>
      <Row>
        <Col xs={12}>
          <FoundKanji foundKanji={foundKanji} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;