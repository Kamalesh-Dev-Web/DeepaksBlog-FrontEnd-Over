import * as api from "../api/index.js";

// create action creators
// action creators are the functions

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);

    dispatch({ type: "FETCH_POST", payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};
export const postToken = () => async (dispatch) => {
  try {
    const { data } = await api.giveToken();

    dispatch({ type: "TOKEN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (post, history) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);

    dispatch({ type: "CREATE_POST", payload: data });

    history.push(`/blogs`);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatingPost = (id, post, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data);
    dispatch({ type: "UPDATE_POST", payload: data });
    history.push(`/blogs`);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const commentPost = (id, value) => async (dispatch) => {
  try {
    const { data } = await api.commentPost(id, value);
    dispatch({ type: "COMMENT", payload: data });
    console.log(data);
    return data.comments;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.deleteComment(postId, commentId);
  } catch (error) {}
};

export const updateComment = (postId, commentId, value) => async (dispatch) => {
  try {
    await api.updateComment(postId, commentId, value);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId);
    dispatch({ type: "LIKE", payload: data });
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error.message);
  }
};
