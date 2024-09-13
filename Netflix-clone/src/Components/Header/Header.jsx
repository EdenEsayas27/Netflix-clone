import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NetflixLogo from "../../assets/NetflixLogo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <Navbar
      className={`Header_outer_container ${isScrolled ? "nav_black" : ""}`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={NetflixLogo} alt="Netflix logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <NavDropdown title="Browse by Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#language1">Language 1</NavDropdown.Item>
              <NavDropdown.Item href="#language2">Language 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#search">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#notifications">
              <NotificationsIcon />
            </Nav.Link>
            <Nav.Link href="#account">
              <AccountBoxIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
