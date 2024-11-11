import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JobListing from "../components/JobListing";
import CandidateList from "../components/CandidateList";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="d-flex justify-content-center pt-5 pb-4">
        <h1 style={{ color: "#5D5DFF" }}>
          "Empowering Talent, Creating Opportunities"
        </h1>
      </div>
      <hr />

      <Row className="p-4">
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h3>"Investing in People, Creating Jobs"</h3>
          <p style={{ maxWidth: "500px" }}>
            "Creating job opportunities not only helps individuals grow, but
            also strengthens communities and drives progress. By clicking here,
            you can take the first step towards building a thriving team and
            empowering talent. Start creating jobs today and be part of a
            positive change for the future!"
          </p>
          <button
            style={{ width: "40%", backgroundColor: "#5d5dff" }}
            onClick={() => navigate("/create-job")}
          >
            Create New Job
          </button>
        </Col>
      </Row>
      <hr />

      <JobListing />
    </div>
  );
};

export default Dashboard;
