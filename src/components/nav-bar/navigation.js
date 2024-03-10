import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { Dropdown } from "react-bootstrap";
export default function NAVI_BAR() {
  // const location = useLocation();
  // const {pathname} = location;

  // const splitLocation = pathname.split("/");
  return (
    <Navbar bg="dark" variant="dark" className="navigation fixed-top">
      <Container>
        <Navbar.Brand className="headingn">Weather App</Navbar.Brand>
        <Nav className="nav-links">
          <NavLink to="/" className="link1">
            Home
          </NavLink>

          <NavLink to="/about" className="link2">
            About
          </NavLink>
        </Nav>
        <Dropdown className="dynamic-section">
          <Dropdown.Toggle id="dropdown-basic" className="More-section">
            More
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to="/" className="link1">
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/about" className="link2">
                About
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
