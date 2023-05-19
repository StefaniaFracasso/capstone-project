import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RSS2JSON_API = "https://api.rss2json.com/v1/api.json";
export const RSS_FEED_URL = "https://soranews24.com/feed/";
export const API_KEY = "nzsiatgtevh6seb1fbnggjwwm9plrs2ggjbvzghe";

const BlogSection = () => {
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

  return (
    <Container className="bgColor my-4 pt-5">
      <h2 className="text-center">News from all around Japan</h2>
      <h5 className="text-center mb-5">
        <em>
          We know you love Japan. Stay updated and read all the latest news!
        </em>
      </h5>
      <Row>
        {articles.slice(0, 3).map((article) => (
          <Col md={4} className="mb-4" key={article.guid}>
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
            </Card>
          </Col>
        ))}
        <Link
          to={"/blog"}
          className="greenButton rounded-pill fw-bold mt-3 shadow"
        >
          Read all the news
        </Link>
      </Row>
    </Container>
  );
};

export default BlogSection;
