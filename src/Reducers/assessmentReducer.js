const initialState = {
  assessments: JSON.parse(localStorage.getItem("assessments")) || [],
};

const assessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ASSESSMENT":
      const newAssessment = {
        ...action.payload,
        jobId: action.payload.jobId,
      };

      const newAssessments = [...state.assessments, newAssessment];

      localStorage.setItem("assessments", JSON.stringify(newAssessments));
      return { ...state, assessments: newAssessments };

    case "UPDATE_ASSESSMENT":
      const updatedAssessments = state.assessments.map((assessment) =>
        assessment.id === action.payload.id ? action.payload : assessment
      );
      localStorage.setItem("assessments", JSON.stringify(updatedAssessments));
      return { ...state, assessments: updatedAssessments };

    case "DELETE_ASSESSMENT":
      const filteredAssessments = state.assessments.filter(
        (assessment) => assessment.id !== action.payload
      );
      localStorage.setItem("assessments", JSON.stringify(filteredAssessments));
      return { ...state, assessments: filteredAssessments };

    default:
      return state;
  }
};

export default assessmentReducer;
