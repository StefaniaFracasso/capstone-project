import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SpinnerDotted } from "spinners-react";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json";
const RSS_FEED_URL = "https://soranews24.com/feed/";
const API_KEY = "nzsiatgtevh6seb1fbnggjwwm9plrs2ggjbvzghe";

const SingleArticle = ({ getArticleId }) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const fetchArticle = async (id) => {
    try {
      const response = await fetch(
        `${RSS2JSON_API}?rss_url=${RSS_FEED_URL}&api_key=${API_KEY}`
      );
      const data = await response.json();
      const articles = data.items;
      const foundArticle = articles.find(
        (article) => getArticleId(article.guid) === id
      );

      setArticle(foundArticle);
      console.log("Found article", foundArticle);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticle(articleId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleId]);

  if (!article) {
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
    <div className="mb-5">
      <Container>
        <h2 className="my-4 pt-3 text-center">{article.title}</h2>
        <div
          className="singleArticle"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Container>
      <Container className="text-center">
        <Link to={`/blog`} className="greenButton rounded-pill fw-bold shadow">
          Back to Blog
        </Link>
      </Container>
    </div>
  );
};

export default SingleArticle;
