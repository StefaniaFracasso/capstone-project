import { Col, Container, Row } from "react-bootstrap";

const AppDescription = () => {
  return (
    <Container fluid className="description py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <div className="text-center mb-5">
            <h2>Why using PeraPera?</h2>
            <h5>
              <em>Studying is hard, studying a language like Japanese is even harder!</em>
            </h5>
          </div>
          <Row>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
              <p>
                Flashcards are <strong>small cards</strong> on which to write the
                question on one side and the answer on the other. <em>Easy, no? </em>
                In addition, you can also express the question in an unconventional
                way, that is, with visual, numerical or symbolic reminders.
              </p>
              <p className="mb-0">
                The basic idea behind this method is <strong>the principle ofrepetition</strong>: through a "question
                and answer" mechanism, your brain strives and applies active
                memorization. It is a method that involves our self-monitoring
                processes and the ability to self-correct if we get the answer
                wrong.
              </p>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img
                src="/assets/japanese-alphabets.gif"
                alt="japanese language"
                className="img-fluid mx-auto"
                style={{ width: "50%" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="text-center">
              <img
                src="/assets/levels.gif"
                alt="levels"
                className=" d-none d-md-block img-fluid"
                style={{ width: "70%" }}
              />
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
              <p>
                On PeraPera you can study in levels: you will start with the
                simplest kanji and then gradually progress to greater difficulties.
              </p>
              <p>
                Don't worry if you still don't feel confident! You can go back and
                study the kanji of individual levels <strong>as many times as you want!</strong>
              </p>
              <p>
                And if you need to look up a particular kanji, the
                <strong>search function</strong> is what you need: you can search by
                meaning, reading, or directly by writing in Japanese.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AppDescription;
