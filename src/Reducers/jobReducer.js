import { dummyJobs } from "../dummyData";

const initialJobs = JSON.parse(localStorage.getItem("jobs")) || dummyJobs;

const initialState = {
  jobs: initialJobs,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      const newJob = { ...action.payload };
      const newJobs = [...state.jobs, newJob];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return { ...state, jobs: newJobs };

    case "DELETE_JOB":
      const filteredJobs = state.jobs.filter(
        (job) => job.id !== action.payload
      );
      localStorage.setItem("jobs", JSON.stringify(filteredJobs));
      return { ...state, jobs: filteredJobs };

    case "UPDATE_JOB":
      const updatedJobs = state.jobs.map((job) =>
        job.id === action.payload.id ? { ...action.payload } : job
      );
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return { ...state, jobs: updatedJobs };

    default:
      return state;
  }
};

export default jobReducer;
