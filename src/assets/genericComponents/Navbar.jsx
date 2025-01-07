import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsYoutube, BsPerson } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import imageone from "../images/image 1.png";
import insta from "../images/insta.png";
import chevron from "../images/Chevron.png";

export default function SignIn() {
  return (
    <Container className="navbar-section">
      <Navbar
        expand="lg p-0"
        className="fixed-top"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Container className="navbarstyling p-0 text-lg-left text-md-center text-sm-center">
          <Navbar.Brand className="brand p-0 m-0" href="#">
            <img src={imageone} alt="No Display" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navStyling mx-auto " navbarScroll>
              <Link
                to="/"
                className="eachnav text-danger text-decoration-none px-2 text-uppercase"
              >
                HomePage
              </Link>
              <Link
                to="/Presentation"
                className="eachnav mx-1 text-decoration-none px-2 text-dark text-uppercase"
              >
                Presentation
              </Link>
              <Link
                to="/sports"
                className="eachnav mx-1 text-decoration-none px-2 text-dark text-uppercase"
              >
                Sports
              </Link>
              <Link
                to="/Concours"
                className="eachnav mx-1 text-decoration-none px-2 text-dark text-uppercase"
              >
                Concours
              </Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <img src={insta} alt="No Display" />
              </Nav.Link>
              <Nav.Link>
                <BiLogoFacebook className="socialamedia-icons text-primary" />
              </Nav.Link>
              <Nav.Link>
                <BsYoutube className="socialamedia-icons text-danger mx-1" />
              </Nav.Link>
            </Nav>
            <div className="inscriptionButton-parent">
              <button
                type="button"
                className="inscription-button bg-danger border-danger text-white mx-lg-1 mx-sm-0"
              >
                INSCRIPTION
              </button>
            </div>
            <Nav.Link>
              <BsPerson className="person-icons rounded mx-2" />
            </Nav.Link>
            <Nav.Link>
              <TbWorld className="world-icons text-primary mx-1" />
            </Nav.Link>
            <img src={chevron} alt="No Display" />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container className="mt-5">
        {/* Content ka code yahan aayega */}
      </Container>
    </Container>
  );
}
