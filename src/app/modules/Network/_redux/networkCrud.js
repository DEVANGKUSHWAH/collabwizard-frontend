import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/network";
export const TEACHER_URL = "https://collabwizard.herokuapp.com/api/teacher";

export function createNetwork(network) {
  return axios.post(URL, { ...network});
}

export function getAllNetworks() {
  return axios.get(URL);
}

export function getNetworkById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findNetworks(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function findTeachers(queryParams) {
    return axios.get(`${TEACHER_URL}`, { params : queryParams });
}

export function updateNetwork(network) {
  return axios.put(`${URL}/${network.id}`, { ...network });
}

export function deleteNetwork(id) {
  return axios.delete(`${URL}/${id}`);
}