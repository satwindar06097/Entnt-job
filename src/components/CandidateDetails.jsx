import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CandidateDetails = () => {
  const { candidateId } = useParams();
  const candidates = useSelector((state) => state.candidates.candidates);

  const candidate = candidates.find((c) => c.id === parseInt(candidateId));
  const navigate = useNavigate();

  if (!candidate) {
    return <p>Candidate not found.</p>;
  }

  return (
    <Container fluid className="my-1 p-1">
      <h3
        className="text-center mb-4 font-weight-bold"
        style={{ color: "#5D5DFF" }}
      >
        Candidate Details
      </h3>

      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="bg-dark text-light shadow-lg p-3">
            <Card.Body>
              <h2 className="text-center">{candidate.name}</h2>

              <p className="text-center">
                <strong>Email:</strong> {candidate.profile.email}
              </p>

              <p className="text-center">
                <strong>Contact:</strong> {candidate.profile.contact}
              </p>

              <p className="text-center">
                <strong>Experience:</strong> {candidate.profile.experience}
              </p>

              <p className="text-center">
                <strong>Status:</strong> {candidate.status}
              </p>

              <hr className="border-light" />

              <div className="text-center">
                <h4>Skills</h4>
                <div className="d-flex flex-wrap justify-content-center">
                  {candidate.profile.skills.map((skill, index) => (
                    <button
                      key={index}
                      variant="outline-light"
                      style={{
                        margin: "5px",
                        fontSize: "0.9rem",
                        padding: "5px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-light" />

              <div className="text-center">
                <button
                  variant="primary"
                  href={candidate.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  Download Resume
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateDetails;
