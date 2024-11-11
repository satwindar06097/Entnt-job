import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Card, Col, Row } from "react-bootstrap";
import { updateCandidateStatus } from "../actions/candidateActions";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { TbSquareRoundedArrowDown } from "react-icons/tb";

const CandidateList = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobs = useSelector((state) => state.jobs.jobs);
  const candidates = useSelector((state) => state.candidates.candidates);

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const job = jobs.find((job) => job.id === parseInt(jobId));

  const jobCandidates = candidates.filter(
    (candidate) => candidate.jobId === parseInt(jobId)
  );

  const handleStatusChange = (candidateId, newStatus) => {
    dispatch(updateCandidateStatus(candidateId, newStatus));
  };

  const getStatusIcon = (status) => {
    const iconStyle = { fontSize: "1.5rem", marginRight: "8px" };
    switch (status) {
      case "Under Review":
        return <MdAccessTimeFilled style={iconStyle} />;
      case "Interview Scheduled":
        return <FaCircleCheck style={iconStyle} />;
      case "Accepted":
        return <FaCircleCheck style={iconStyle} />;
      case "Rejected":
        return <RxCrossCircled style={iconStyle} />;
      default:
        return null;
    }
  };

  const handleRowClick = (candidateId) => {
    navigate(`/candidate/${candidateId}`);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-light">{job?.title} - Applicants</h2>

      <Row>
        <Col>
          <Card className="shadow-lg p-4 bg-dark text-light">
            {jobCandidates.length > 0 ? (
              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="text-center table-striped"
              >
                <thead className="bg-primary text-light">
                  <tr>
                    <th>#</th>
                    <th>Candidate Name</th>
                    <th>Resume</th>
                    <th>Application Date</th>
                    <th>Current Status</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobCandidates.map((candidate, index) => (
                    <tr key={candidate.id}>
                      <td>{index + 1}</td>
                      <td
                        onClick={() => handleRowClick(candidate.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {candidate.name}
                      </td>
                      <td>
                        <button
                          href={candidate.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          className="text-decoration-none"
                          style={{
                            minWidth: "200px",
                            backgroundColor: "#5d5dff",
                          }}
                        >
                          Download Resume
                        </button>
                      </td>
                      <td>{candidate.applicationDate}</td>
                      <td
                        style={{
                          height: "100%",
                          textAlign: "center",
                          width: "250px",
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-center">
                          <span
                            style={{ fontSize: "20px", marginRight: "8px" }}
                          >
                            {getStatusIcon(candidate.status)}
                          </span>

                          <span>{candidate.status}</span>
                        </div>
                      </td>
                      <td>
                        <select
                          value={candidate.status}
                          onChange={(e) =>
                            handleStatusChange(candidate.id, e.target.value)
                          }
                          className="form-select"
                          style={{
                            backgroundColor: "#333",
                            color: "white",
                            minWidth: "150px",
                          }}
                        >
                          <option value="Under Review">Under Review</option>
                          <option value="Interview Scheduled">
                            Interview Scheduled
                          </option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center text-muted">
                No candidates have applied for this job yet.
              </p>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CandidateList;
