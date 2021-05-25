import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/education";

export function createEducation(education) {
  console.log(education);
  return axios.post(URL, { ...education});
}

export function getAllEducations() {
  return axios.get(URL);
}

export function getEducationById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findEducations(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function updateEducation(education) {
  return axios.put(`${URL}/${education.id}`, { ...education });
}

export function deleteEducation(id) {
  return axios.delete(`${URL}/${id}`);
}