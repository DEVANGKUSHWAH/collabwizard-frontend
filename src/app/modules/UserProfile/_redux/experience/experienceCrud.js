import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/experience";

export function createExperience(experience) {
  console.log(experience);
  return axios.post(URL, { ...experience});
}

export function getAllExperiences() {
  return axios.get(URL);
}

export function getexperienceById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findExperiences(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function updateExperience(experience) {
  return axios.put(`${URL}/${experience.id}`, { ...experience });
}

export function deleteExperience(id) {
  return axios.delete(`${URL}/${id}`);
}
