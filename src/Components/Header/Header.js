import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css"


import useAuth from "../../Auth/hooks/useAuth";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";


export default function Header() {
  const { auth, setAuth } = useAuth();
  return (
    <Navbar expand="lg" className="bg-primary z-10">
      <Container>
        <Link to="/" className="navbar-brand p-0">
          <Navbar.Brand href="#home">
            <img
              src="/images/sonic_fury.png"
              width="80"
              height="80"
              className="d-inline-block align-top p-0"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
            {auth?.user ? (
              <>
                <p
                  className="helloUser"
                  style={{ color: "white", fontWeight: "600" }}
                >
                  Hello {auth.user.nick}!!
                </p>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                {auth?.user.isAdmin ? (
                  <Link to="/backoffice" className="nav-link">
                    Admin
                  </Link>
                ) : (
                  <></>
                )}
                <p
                  className="nav-link logout"
                  onClick={() => {
                    setAuth({});
                  }}
                >
                  Logout
                </p>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}
