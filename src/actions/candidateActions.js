export const updateCandidateStatus = (candidateId, newStatus) => (dispatch) => {
  dispatch({
    type: "UPDATE_CANDIDATE_STATUS",
    payload: { candidateId, newStatus },
  });
};
