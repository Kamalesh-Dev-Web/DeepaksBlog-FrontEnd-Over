import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// const url = "https://blog-app-deepak.herokuapp.com/post";

export const fetchPosts = () => API.get(`/post`);
export const fetchPost = (id) => API.get(`/post/${id}`);
export const giveToken = () => API.post("/auth/token");
export const createPost = (newPost) => API.post(`/post`, newPost);
export const updatePost = (id, updatedPost) =>
  API.put(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const commentPost = (id, value) =>
  API.post(`/post/${id}/comment`, value);
export const deleteComment = (postId, commentId) =>
  API.delete(`/post/${postId}/comment/${commentId}`);
export const updateComment = (postId, commentId, value) =>
  API.put(`/post/${postId}/comment/${commentId}`, value);
export const likePost = (id) => API.post(`/post/${id}/like`);
