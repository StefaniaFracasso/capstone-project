import { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {

  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/results/${query}`;
  }

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
      <Container>
        <Link to={'/'}>
          <img src="/assets/perapera-logo.png" alt="logo" style={{width: "50px"}} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-2">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search kanji or english"
                className="me-2"
                aria-label="Search"
              />
              <Link to={`/results/${query}`} className="btn btn-outline-warning">
                Search
              </Link>
            </Form>
            <Nav.Link href="#" className="mx-md-2 text-light">Home</Nav.Link>
            <Nav.Link href="#blog" className="mx-md-2 text-light">Blog</Nav.Link>
          </Nav>
          <Link to={'/learnjapanese'} type="button" className="yellowButton rounded-pill">Start Learning</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;