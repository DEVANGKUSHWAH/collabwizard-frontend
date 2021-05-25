import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/skill";

export function createSkill(skill) {
  console.log(skill);
  return axios.post(URL, { ...skill});
}

export function getAllSkills() {
  return axios.get(URL);
}

export function getSkillById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findSkills(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function updateSkill(skill) {
  return axios.put(`${URL}/${skill.id}`, { ...skill });
}

export function deleteSkill(id) {
  return axios.delete(`${URL}/${id}`);
}
