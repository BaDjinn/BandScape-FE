import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useAuth from "../../Auth/hooks/useAuth";
import { Link } from "react-router-dom";
import { SiBandsintown } from "react-icons/si";
export default function Header() {
  const { auth, setAuth } = useAuth();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand ">
          <SiBandsintown className="me-2" />
          Band Scape
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
            {auth?.username ? (
              <>
                <p
                  className="helloUser"
                  style={{ color: "white", fontWeight: "600" }}
                >
                  Hello {auth.username}!!
                </p>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                {auth?.roles?.find((role) => role === "ROLE_ADMIN") ? (
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
