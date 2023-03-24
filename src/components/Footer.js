import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-dark text-white mt-5">
        <Container>
          <div className="row py-4">
            <div className="col-md-6">
              <h1
                className="text-primary fw-bold fst-italic"
                style={{
                  fontFamily: "monospace",
                  fontSize: "2.5rem",
                }}
              >
                <span>sdg</span>
                <span className="text-white">watch</span>
              </h1>
              <p className="fw-normal text-secondary fs-6">
                bringing projects to life on the{" "}
                <a href="https://flow.com">flow</a>
              </p>
            </div>
            <div className="col-md-6 text-end pt-3">
              <ul className="list-unstyled">
                <li>
                  <Link href="/">/Home</Link>
                </li>
                <li>
                  <Link href="/about">/About</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
