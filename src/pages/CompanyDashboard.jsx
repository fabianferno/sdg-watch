import { ProjectCard } from "../components/ProjectsCard";
import { Card, Col, Row } from "react-bootstrap";

export default function CompanyDashboard() {
  return (
    <div className="mt-3">
      <h1 className="text-white fw-bold ">Project Name: Burma Mangrove ARR</h1>
      <div>
        <h5 className="">View projects to fund</h5>
        <hr />
        <div className="row">
          {/* Section 1 */}
          <div className="col-md-4 my-4">
            <Card
              style={{
                minHeight: "17rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              className="border-dark"
              bg="black"
              text="light"
            >
              <Card.Body>
                <img
                  src="graph1.png"
                  alt="graph1"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Body>
            </Card>
          </div>

          {/* Section 2 */}
          <div className="col-md-4 my-4">
            <Card
              style={{
                minHeight: "16rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              className="border-dark"
              bg="black"
              text="light"
            >
              <Card.Body>
                <img
                  src="graph2.png"
                  alt="graph1"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Body>
            </Card>
          </div>

          {/* Section 3 */}
          <div className="col-md-4 my-4">
            <Card
              className="border-dark"
              style={{
                height: "16rem",
                background:
                  "linear-gradient(-120deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)",
              }}
              text="light"
            >
              <Card.Body>
                <h5 className="fw-bold text-white">
                  Companies that have claimed
                </h5>
                <Card.Text className="fw-light mt-3">
                  {/* Generate a list of companies that have claimed with bootstrap 5 classes */}
                  - Global Green Guild Ltd.
                  <br />
                  - Vencils Foundation
                  <br />- Trinity Inc.
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
                {Array.from({ length: 17 }).map((_, index) =>
                  [1, 2, 3, 8, 17].includes(index) ? (
                    <Col key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center fw-bold text-black rounded bg-primary "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        {index}
                      </div>
                    </Col>
                  ) : (
                    <Col key={index}>
                      <div
                        className="rounded border border-primary "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </Col>
                  )
                )}
              </Row>

              {/* Section 4.2 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className=" text-white">Indirect Positive</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) =>
                  [4, 5, 10, 14].includes(index) ? (
                    <Col key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center fw-bold text-black rounded bg-primary "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        {index}
                      </div>
                    </Col>
                  ) : (
                    <Col key={index}>
                      <div
                        className="rounded border border-primary "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </Col>
                  )
                )}
              </Row>

              {/* Section 4.3 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className="text-white">No Impact</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) =>
                  [7, 16].includes(index) ? (
                    <Col key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center fw-bold text-black rounded bg-info "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        {index}
                      </div>
                    </Col>
                  ) : (
                    <Col key={index}>
                      <div
                        className="rounded border border-info "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </Col>
                  )
                )}
              </Row>

              {/* Section 4.4 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className="  text-white">Indirect Negative</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) =>
                  [12, 13].includes(index) ? (
                    <Col key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center fw-bold text-black rounded bg-danger "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        {index}
                      </div>
                    </Col>
                  ) : (
                    <Col key={index}>
                      <div
                        className="rounded border border-danger "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </Col>
                  )
                )}
              </Row>

              {/* Section 4.45 */}
              <Row className="mt-2">
                <Col xs={1}>
                  <h6 className=" text-white">Direct Negative</h6>
                </Col>
                {Array.from({ length: 17 }).map((_, index) =>
                  [6, 9, 11, 15].includes(index) ? (
                    <Col key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center fw-bold text-black rounded bg-danger "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        {index}
                      </div>
                    </Col>
                  ) : (
                    <Col key={index}>
                      <div
                        className="rounded border border-danger "
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      ></div>
                    </Col>
                  )
                )}
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
