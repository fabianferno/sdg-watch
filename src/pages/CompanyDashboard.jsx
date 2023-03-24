import { ProjectCard } from "../components/ProjectsCard";
import { Card, Col, Row } from "react-bootstrap";

export default function CompanyDashboard() {
  return (
    <div className="mt-3">
      <h1 className="text-white fw-bold ">Project Name</h1>
      <div>
        <h5 className="">View projects to fund</h5>
        <hr />
        <div className="row">
          {/* Section 1 */}
          <div className="col-md-4 my-4">
            <Card
              style={{
                height: "12rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              className="border-dark"
              bg="black"
              text="light"
            >
              <Card.Body>
                <h6 className="fw-bold text-white">Ethereum Name Service</h6>
                <Card.Text className="fw-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Section 2 */}
          <div className="col-md-4 my-4">
            <Card
              style={{
                height: "12rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              className="border-dark"
              bg="black"
              text="light"
            >
              <Card.Body>
                <h6 className="fw-bold text-white">Ethereum Name Service</h6>
                <Card.Text className="fw-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Section 3 */}
          <div className="col-md-4 my-4">
            <Card
              className="border-dark"
              style={{
                height: "12rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              text="light"
            >
              <Card.Body>
                <h6 className="fw-bold text-white">
                  Companies that have claimed
                </h6>
                <Card.Text className="fw-light mt-3">
                  {/* Generate a list of companies that have claimed with bootstrap 5 classes */}
                  - Company 1
                  <br />
                  - Company 2
                  <br />- Company 3
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Section 4 */}
        <div className="row m-1">
          <Card
            className="border-dark"
            style={{
              background:
                "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
            }}
            text="light"
          >
            <Card.Body>
              {/* Section 4.1 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className="  text-white">Direct Positive</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) => (
                  <Col key={index}>
                    <div
                      className="rounded border border-primary "
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>

              {/* Section 4.2 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className=" text-white">Indirect Positive</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) => (
                  <Col key={index}>
                    <div
                      className="rounded border border-primary "
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>

              {/* Section 4.3 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className="text-white">No Impact</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) => (
                  <Col key={index}>
                    <div
                      className="rounded border border-info "
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>

              {/* Section 4.4 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className="  text-white">Indirect Negative</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) => (
                  <Col key={index}>
                    <div
                      className="rounded border border-danger "
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>

              {/* Section 4.45 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className=" text-white">Direct Negative</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) => (
                  <Col key={index}>
                    <div
                      className="rounded border border-danger "
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
