import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import JobForm from "./components/JobForm";
import Footer from "./components/Footer";
import Dashboard from "./screens/Dashboard";
import CandidateDetails from "./components/CandidateDetails";
import AssessmentPage from "./components/AssessmentForm";
import JobQuestions from "./components/JobQuestions";
import CandidateList from "./components/CandidateList";
import { initializeData } from "./dummyData";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initializeData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-job" element={<JobForm />} />
            <Route path="/edit-job/:id" element={<JobForm />} />
            <Route path="/assessmentPage" element={<AssessmentPage />} />
            <Route path="/candidateList/:jobId" element={<CandidateList />} />
            <Route
              path="/candidate/:candidateId"
              element={<CandidateDetails />}
            />
            <Route path="/questions/:jobId" element={<JobQuestions />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
