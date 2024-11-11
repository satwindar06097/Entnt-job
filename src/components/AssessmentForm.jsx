import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAssessment,
  updateAssessment,
} from "../actions/assessmentActions";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const AssessmentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const jobs = useSelector((state) => state.jobs.jobs);
  const assessments = useSelector((state) => state.assessments.assessments);

  const [selectedJobId, setSelectedJobId] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState("");

  const { state } = location;
  const isEdit = state?.isEdit;
  const currentQuestion = state?.question;

  useEffect(() => {
    if (isEdit && currentQuestion) {
      setSelectedJobId(currentQuestion.jobId);
      setQuestion(currentQuestion.question);
      setOptions(currentQuestion.options);
      setCorrectOption(currentQuestion.correctOption);
    }
  }, [isEdit, currentQuestion]);

  const handleAddOrUpdateQuestion = () => {
    if (selectedJobId && question && correctOption) {
      const assessmentData = {
        id: isEdit ? currentQuestion.id : Date.now(),
        jobId: selectedJobId,
        question,
        options,
        correctOption,
      };

      if (isEdit) {
        dispatch(updateAssessment(assessmentData));
      } else {
        dispatch(createAssessment(assessmentData));
      }

      setSelectedJobId("");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectOption("");
    }
  };

  const getNumberOfQuestions = (jobId) => {
    return assessments.filter((assessment) => assessment.jobId === jobId)
      .length;
  };
  const handleJobCardClick = (jobId) => {
    navigate(`/questions/${jobId}`);
  };

  return (
    <Container fluid>
      <h3
        style={{ color: "#5D5DFF" }}
        className="text-center mb-4 font-weight-bold"
      >
        {isEdit ? "Edit Assignment" : "Create Assignment"}
      </h3>

      <Row className="justify-content-center mb-5">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="bg-dark text-light shadow-lg p-3">
            <Card.Body>
              <Form.Group controlId="jobSelection">
                <Form.Label>Select Job</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                >
                  <option value="">Select a Job</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Question</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </Form.Group>

              {options.map((option, index) => (
                <Form.Group key={index}>
                  <Form.Label>Option {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...options];
                      updatedOptions[index] = e.target.value;
                      setOptions(updatedOptions);
                    }}
                  />
                </Form.Group>
              ))}

              <Form.Group>
                <Form.Label>Correct Option</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Correct Option"
                  value={correctOption}
                  onChange={(e) => setCorrectOption(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <button
                  style={{
                    marginTop: "18px",
                    width: "60%",
                    backgroundColor: "#5d5dff",
                  }}
                  onClick={handleAddOrUpdateQuestion}
                >
                  {isEdit ? "Update Question" : "Add Question"}
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />

      <h3 className="text-center mt-4 font-weight-bold p-4">
        Jobs with Created Assignments
      </h3>

      <Row className="g-4">
        {jobs.map((job) => (
          <Col xs={12} sm={6} md={4} lg={4} key={job.id}>
            <Card
              className="bg-dark text-light shadow-lg p-3"
              onClick={() => handleJobCardClick(job.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="font-weight-bold mb-2">
                    {job.title}
                  </Card.Title>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginLeft: "10px",
                    }}
                  >
                    JobID :- {job.id}
                  </span>
                </div>

                <div className="d-flex justify-content-center mt-3 p-2">
                  <button
                    style={{ width: "60%", backgroundColor: "#5d5dff" }}
                    onClick={() => handleJobCardClick(job.id)}
                    className="   align-items-center  mr-2"
                  >
                    View Questions
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AssessmentForm;
