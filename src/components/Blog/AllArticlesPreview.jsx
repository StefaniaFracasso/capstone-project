import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json";
const RSS_FEED_URL = "https://soranews24.com/feed/";
const API_KEY = "nzsiatgtevh6seb1fbnggjwwm9plrs2ggjbvzghe";

const AllArticlesPreview = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${RSS2JSON_API}?rss_url=${RSS_FEED_URL}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const getArticleId = (guid) => {
    const idStartIndex = guid.lastIndexOf('=') + 1;
    return guid.substring(idStartIndex);
  };

  return (
    <Container className="bgColor my-4 pt-3">
      <h2 className="text-center mb-5">News from all around Japan</h2>
      <Row>
        {articles.map((article, index) => (
          <Col md={4} className="mb-4" key={getArticleId(article.guid)}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={article.enclosure.link}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{truncateText(article.description, 150)}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link
                  to={`/blog/${getArticleId(article.guid)}`}
                  className="greenButton rounded-pill fw-bold"
                >
                  Read more
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllArticlesPreview;
