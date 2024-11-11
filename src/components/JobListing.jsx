import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob } from "../actions/jobActions";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";

const JobListing = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const candidates = useSelector((state) => state.candidates.candidates);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCandidateCount = (jobId) => {
    return candidates.filter((candidate) => candidate.jobId === jobId).length;
  };

  const handleCardClick = (id) => {
    navigate(`/candidateList/${id}`);
  };

  return (
    <Container fluid className="my-4 p-4">
      <h2 className="text-center mb-4 font-weight-bold">Job Listings</h2>

      <Row className="g-4">
        {jobs.map((job) => (
          <Col xs={12} sm={12} md={12} lg={6} key={job.id}>
            <Card
              className="bg-dark text-light shadow-lg p-3"
              onClick={() => handleCardClick(job.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title
                    className="font-weight-bold mb-2"
                    style={{ color: "#5D5DFF" }}
                  >
                    {job.title}
                  </Card.Title>
                  <span
                    style={{
                      color: "#5D5DFF",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    JobID: {job.id}
                  </span>
                </div>

                <Card.Text
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    minHeight: "40px",
                  }}
                >
                  {job.description}
                </Card.Text>

                <div
                  style={{
                    color: "#FFD700",
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  No of Candidates Applied: {getCandidateCount(job.id)}
                </div>

                {/* Button Section */}
                <div className="d-flex flex-wrap justify-content-between mt-3">
                  <Button
                    style={{
                      backgroundColor: "#5d5dff",
                      borderColor: "#5d5dff",
                      marginBottom: "5px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/edit-job/${job.id}`);
                    }}
                  >
                    <FaRegEdit
                      style={{ fontSize: "18px", marginRight: "5px" }}
                    />
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteJob(job.id));
                    }}
                    style={{ marginBottom: "5px" }}
                  >
                    <MdFolderDelete
                      style={{ fontSize: "18px", marginRight: "5px" }}
                    />
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobListing;
