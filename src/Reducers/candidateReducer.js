import { dummyCandidates } from "../dummyData";

const initialState = {
  candidates: JSON.parse(localStorage.getItem("candidates")) || dummyCandidates,
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CANDIDATE_STATUS":
      const { candidateId, newStatus } = action.payload;
      const updatedCandidates = state.candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, status: newStatus }
          : candidate
      );

      localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
      return { ...state, candidates: updatedCandidates };
    default:
      return state;
  }
};

export default candidateReducer;
