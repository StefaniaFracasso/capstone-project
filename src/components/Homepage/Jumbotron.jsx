import { Col, Container } from "react-bootstrap";

const Jumbotron = () => {

  return (
    <div className="position-relative overflow-hidden">
      <div className="p-5 bgColor rounded-3">
        <Container className="p-5 bgColor rounded-3 mb-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="h1 fw-bold bigTitle">
                <img
                  src="/assets/decorationTitle.svg"
                  alt="Decoration"
                  className="decoration"
                />
                take your japanese <br /> to the next level
              </h1>
            </div>
            <Col md={4} className="bg-pattern d-none d-md-block"></Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Jumbotron;

