import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addJob, updateJob } from "../actions/jobActions";
import { useNavigate, useParams } from "react-router-dom";

const JobForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs.jobs);

  const jobToEdit = id ? jobs.find((job) => job.id === parseInt(id)) : null;

  const [title, setTitle] = useState(jobToEdit ? jobToEdit.title : "");
  const [description, setDescription] = useState(
    jobToEdit ? jobToEdit.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      id: jobToEdit ? jobToEdit.id : Date.now(),
      title,
      description,
    };
    jobToEdit ? dispatch(updateJob(job)) : dispatch(addJob(job));

    navigate("/dashboard");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center m-3 p-4 mt-5"
    >
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto ">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto p-4"
            style={{
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 8px #535bf2",
              borderRadius: "10px",
            }}
          >
            <h3 className="font-weight-bold mb-3">
              {jobToEdit ? "Edit Job" : "Add Job"}
            </h3>

            <Form.Group controlId="jobTitle" className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="jobDescription" className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter job description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={3}
              />
            </Form.Group>

            <button
              type="submit"
              style={{ width: "60%", backgroundColor: "#5d5dff" }}
              className="w-100"
            >
              {jobToEdit ? "Update Job" : "Add Job"}
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JobForm;
