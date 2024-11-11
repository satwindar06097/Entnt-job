import React from "react";
import { Row, Col } from "react-bootstrap";
import DashBoard from "../assets/DashBoard.png";
import Applican_List from "../assets/Applicant_List.png";
import CreatAssPg from "../assets/CreatAssPg.png";
import QuestionList from "../assets/QuestionList.png";

const HomeScreen = () => {
  return (
    <div>
      <div className="d-flex justify-content-center pt-5 pb-4">
        <h1 style={{ color: "#5D5DFF" }}>"Streamline Hiring Process"</h1>
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="text-center" style={{ maxWidth: "800px" }}>
          <h4>
            Efficiently manage job postings, track candidates, and create custom
            assessments — all in one place.
          </h4>
        </div>
      </div>
      <hr />

      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>
          "Manage Your Job Listings with Ease"
        </h4>
      </div>
      <Row className="p-4">
        <Col xs={12} md={6} className="mx-auto mb-4">
          <p style={{ maxWidth: "500px" }}>
            Create, edit, and organize job postings effortlessly. Use the
            dashboard to add new job opportunities, update existing listings,
            and track all your open positions in one centralized place. Below,
            you'll find a complete list of jobs ready for you to manage. Click
            on any job card to see a detailed list of candidates who have
            applied.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "400px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
            }}
            alt="img"
            src={DashBoard}
          />
        </Col>
      </Row>
      <hr />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>
          "Your Central Hub for Job Management and Candidate Tracking"
        </h4>
      </div>
      <Row className="p-4">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "450px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
              objectFit: "fill",
            }}
            alt="img"
            src={Applican_List}
          />
        </Col>
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h4 className="mt-5">Discover Effortless Review Handling</h4>
          <p style={{ maxWidth: "500px" }}>
            Quickly review applications, update candidate statuses, and access
            in-depth candidate profiles with a single click on candidate Name .
            Optimize your recruitment workflow and make informed hiring
            decisions faster than ever.
          </p>
        </Col>
      </Row>
      <hr />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>"Create Tailored Job Assessments"</h4>
      </div>
      <Row className="p-4 pb-5">
        <Col xs={12} md={6} className="mx-auto mb-4">
          <h4>
            "Select a Job, Add Questions, and Evaluate Candidates Effectively"
          </h4>
          <p style={{ maxWidth: "500px" }}>
            Choose an existing job from the dropdown, frame multiple-choice
            questions with answer options, and mark the correct answer to assess
            candidates. Below, you can view all the questions created for each
            job, ensuring a streamlined and efficient evaluation process.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "450px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
            }}
            alt="img"
            src={CreatAssPg}
          />
        </Col>
      </Row>
      <hr />
      <div
        className="d-flex justify-content-center mx-5 pt-3 pb-4"
        style={{ maxWidth: "800px" }}
      >
        <h4 style={{ color: "#5D5DFF" }}>"Manage Job Posting Questions"</h4>
      </div>
      <Row className="p-4">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              height: "auto",
              maxHeight: "450px",
              width: "100%",
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(83, 91, 242, 0.6)",
              objectFit: "fill",
            }}
            alt="img"
            src={QuestionList}
          />
        </Col>
        <Col xs={12} md={6} className="mx-auto mb-4">
          <p style={{ marginTop: "30px", maxWidth: "500px" }}>
            On this page, you can view all the questions related to the selected
            job posting. You can easily edit or delete any question as needed.
            To make updates, simply click on the "Edit" button next to the
            question, or use the "Delete" button to remove any unwanted
            questions. This feature provides you with full control over the
            questions associated with your job postings, ensuring they are
            always up-to-date and relevant.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
