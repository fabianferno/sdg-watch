import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function NavBar() {
  return (
    <>
      <Navbar bg="black" variant="dark" className="mt-4">
        <Container>
          <Navbar.Brand href="#home">
            <h1
              className="text-primary fw-bold fst-italic"
              style={{
                fontFamily: "monospace",
                fontSize: "3.5rem",
              }}
            >
              <span>SDG</span>
              <span className="text-white">tokens</span>
            </h1>
            <p className="fw-normal text-secondary fs-6">
              taking sustainable goals to next{" "}
              <a href="https://flow.com">level</a>
            </p>
          </Navbar.Brand>
          <Nav className="me-end">
            <Link className="p-2 fw-normal" to="/">
              / Home
            </Link>
            <Link className="p-2 fw-normal" to="/company-dashboard">
              / Dashboard
            </Link>
            <Link className="p-2 fw-normal me-3" to="/project-dashboard">
              / Project Impact
            </Link>

            <ConnectButton />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
