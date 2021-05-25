import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/interest";

export function createInterest(interest) {
  console.log(interest);
  return axios.post(URL, { ...interest});
}

export function getAllInterests() {
  return axios.get(URL);
}

export function getInterestById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findInterests(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function updateInterest(interest) {
  return axios.put(`${URL}/${interest.id}`, { ...interest });
}

export function deleteInterest(id) {
  return axios.delete(`${URL}/${id}`);
}
