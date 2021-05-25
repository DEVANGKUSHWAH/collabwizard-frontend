import axios from "axios";

export const URL = "https://collabwizard.herokuapp.com/api/post";

export function createPost(post) {
  console.log(post);
  return axios.post(URL, { ...post});
}

export function getAllPosts() {
  return axios.get(URL);
}

export function getPostById(id) {
  return axios.get(`${URL}/${id}`);
}

export function findPosts(queryParams) {
  return axios.get(`${URL}`, { params : queryParams });
}

export function updatePost(post) {
  return axios.put(`${URL}/${post.id}`, { ...post });
}

export function deletePost(id) {
  return axios.delete(`${URL}/${id}`);
}