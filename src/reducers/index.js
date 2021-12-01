import { combineReducers } from "redux";
import posts from "./post.js";
import auth from "./auth.js";
import user from "./user.js";

export default combineReducers({
  posts,
  auth,
  user,
}); //call combine reducers as a func and pass the object
