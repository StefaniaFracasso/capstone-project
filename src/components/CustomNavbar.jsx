import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return (
<Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
      <Container>
        <Link to={'/'}>
            <img src="/assets/perapera-logo.png" alt="logo" style={{width: "50px"}} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-2">
            <Nav.Link href="#" className="mx-md-2 text-light">Home</Nav.Link>
            <Nav.Link href="#blog" className="mx-md-2 text-light">
              Blog
            </Nav.Link>
          </Nav>
            <Button variant="primary" className="yellowButton rounded-pill">Start Learning</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default CustomNavbar;