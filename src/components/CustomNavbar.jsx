import { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CustomNavbar = ({ gradeSelect }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/results/${query}`;
  };

  const handleGradeClick = (grade) => {
    window.location.href = `/learnjapanese/${grade}`;

  };

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
      <Container>
        <Link to={"/"}>
          <img
            src="/assets/perapera-logo.png"
            alt="logo"
            style={{ width: "50px" }}
          />
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
              <Link onClick={handleSubmit} className="btn btn-outline-warning">
                Search
              </Link>
            </Form>
            <Link to={"/"} className="mx-md-2 text-light nav-link">
              Home
            </Link>
            <Link to={"/blog"} className="mx-md-2 text-light nav-link">
              Blog
            </Link>
          </Nav>
          {/* <Link to={'/learnjapanese'} type="button" className="yellowButton rounded-pill">Start Learning</Link> */}
          <DropdownButton id="dropdown-item-button" title="Start learning" className="rounded-pill" variant="warning">
            <Dropdown.Header><em>Choose a level</em></Dropdown.Header>
            <Dropdown.Item as="button" onClick={() => handleGradeClick(1)}>Novice low level</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleGradeClick(2)}>Novice mid level</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleGradeClick(3)}>Intermediate low level</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleGradeClick(4)}>Intermediate mid level</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleGradeClick(5)}>Advanced level</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
