import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container className="mt-5 pt-5 mb-5 text-end flex-column justify-content-center align-items-center ">
        <h1 className="display-2 fw-bold text-white">
          Climate Impact Claim <br /> Validating Platform
        </h1>
        <p className="lead mb-4">
          Powered by a special NFT token ERC 1155 and working <br /> on the
          Sustainable Development Goals
        </p>
        <Button variant="outline-primary" size="lg" className="my-3 fw-bold  ">
          Launch Dapp ▶️
        </Button>
        <hr className="text-primary mt-5" />
      </Container>

      <Container className=" m-5">
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <h5 className="text-white">
              What is the Climate Impact Claim Validating Platform?
            </h5>
            <p className="lead fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="primary" className="my-3">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="placeholder"
              className="img-fluid opacity-25 rounded"
            />
          </Col>
        </Row>
      </Container>

      <Container className="py-5 m-5">
        <Row>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="placeholder"
              className="img-fluid opacity-25 rounded"
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <h5 className="text-white">How does it work?</h5>
            <p className="lead fs-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="primary" className="my-3">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 m-5">
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <h5 className="text-white">
              What is the Climate Impact Claim Validating Platform?
            </h5>
            <p className="lead fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="primary" className="my-3">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="placeholder"
              className="img-fluid opacity-25 rounded"
            />
          </Col>
        </Row>
      </Container>

      <Container className="py-5 text-center">
        <h2 className="text-white">
          Join us today and <br /> make a difference!
        </h2>
        <Button variant="primary" size="lg" className="my-3">
          Get Started
        </Button>
      </Container>
    </div>
  );
}
