import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteAssessment } from "../actions/assessmentActions";

const JobQuestions = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assessments = useSelector((state) => state.assessments.assessments);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const jobQuestions = assessments.filter(
      (assessment) => assessment.jobId === jobId
    );
    setQuestions(jobQuestions);
  }, [assessments, jobId]);

  const handleEdit = (question) => {
    navigate(`/assessmentPage`, { state: { question, isEdit: true } });
  };

  const handleDelete = (questionId) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      dispatch(deleteAssessment(questionId));
    }
  };

  return (
    <Container className="my-4">
      <h3 className="text-center font-weight-bold mb-4">
        Questions for Job ID: {jobId}
      </h3>

      <Row className="g-5">
        {questions.length > 0 ? (
          questions.map((question) => (
            <Col xs={12} sm={6} md={4} lg={4} key={question.id}>
              <Card className="bg-dark text-light shadow-lg p-3">
                <Card.Body>
                  <Card.Title className="font-weight-bold">
                    Q: {question.question}
                  </Card.Title>
                  <Card.Text>
                    <strong>Options:</strong>
                    <ul>
                      {question.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                    <div
                      style={{
                        color: "#FFD700",
                      }}
                    >
                      <strong>Correct Answer:</strong> {question.correctOption}
                    </div>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <button
                      style={{ width: "60%", backgroundColor: "#5d5dff" }}
                      onClick={() => handleEdit(question)}
                    >
                      <FaEdit /> Edit
                    </button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(question.id)}
                    >
                      <FaTrashAlt /> Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <Card className="bg-dark text-light shadow-lg p-3">
              <Card.Body>
                <Card.Text>No questions found for this job.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default JobQuestions;
