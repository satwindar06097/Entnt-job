export const addJob = (job) => ({
  type: "ADD_JOB",
  payload: job,
});

export const deleteJob = (id) => ({
  type: "DELETE_JOB",
  payload: id,
});

export const updateJob = (job) => ({
  type: "UPDATE_JOB",
  payload: job,
});
