import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api";

export function getAllProfiles() {
  return axios.get(URL);
}

export function getProfileById(id) {
  return axios.get(`${URL}/${id}`);
}

export function updateProfile(id,profile) {
  console.log(profile);
  return axios.patch(`${URL}/profile/${id}`, { ...profile });
}

export function findProfiles(queryParams) {
  console.log(queryParams);
  return axios.get(`${URL}/profile`, { params : queryParams });
}