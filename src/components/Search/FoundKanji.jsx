import { Link } from "react-router-dom";

const FoundKanji = ({ foundKanji }) => {
  return (
    <div>
      <h3>What we found</h3>
      {foundKanji.map((kanji) => (
        <div key={kanji.kanji._id}>
          <Link to={`/kanji/${kanji.kanji.character}`}>{kanji.kanji.character}</Link>
        </div>
      ))}
    </div>
  );
};

export default FoundKanji;

