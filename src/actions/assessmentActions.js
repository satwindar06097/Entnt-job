export const createAssessment = (assessment) => ({
  type: "CREATE_ASSESSMENT",
  payload: assessment,
});

export const deleteAssessment = (id) => ({
  type: "DELETE_ASSESSMENT",
  payload: id,
});
export const updateAssessment = (updatedAssessment) => ({
  type: "UPDATE_ASSESSMENT",
  payload: updatedAssessment,
});
