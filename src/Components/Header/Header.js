import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

import useAuth from "../../Auth/hooks/useAuth";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setToggle(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);
  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      className="bg-primary z-10"
      expanded={toggle}
      collapseOnSelect
    >
      <Container>
        <Link to="/" className="navbar-brand p-0">
          <img
            src="/images/sonic_fury.png"
            width="80"
            height="80"
            className="d-inline-block align-top p-0"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" onClick={() => setToggle(false)}>
              Home
            </Link>

            <Link
              to="/posts"
              className="nav-link"
              onClick={() => setToggle(false)}
            >
              Posts
            </Link>
            {auth?.user ? (
              <>
                <p
                  className="helloUser nav-link"
                  style={{ color: "white", fontWeight: "600" }}
                >
                  Hello {auth.user.nick}!!
                </p>
                <Link
                  to="/profile"
                  className="nav-link"
                  onClick={() => setToggle(false)}
                >
                  Profile
                </Link>
                {auth?.user.isAdmin ? (
                  <Link
                    to="/backoffice"
                    className="nav-link"
                    onClick={() => setToggle(false)}
                  >
                    Admin
                  </Link>
                ) : (
                  <></>
                )}
                <p
                  className="nav-link logout"
                  onClick={() => {
                    setAuth({});
                    setToggle(false);
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
