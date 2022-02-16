import axios from"/node_modules/axios.js";var API=axios.create({baseURL:"https://aqueous-hollows-35463.herokuapp.com"});API.interceptors.request.use(function(req){return localStorage.getItem("profile")&&(req.headers.Authorization="Bearer "+JSON.parse(localStorage.getItem("profile")).token),req});export var fetchPosts=function fetchPosts(){return API.get("/post")};export var fetchPost=function fetchPost(id){return API.get("/post/"+id)};export var giveToken=function giveToken(){return API.post("/auth/token")};export var createPost=function createPost(newPost){return API.post("/post",newPost)};export var updatePost=function updatePost(id,updatedPost){return API.put("/post/"+id,updatedPost)};export var deletePost=function deletePost(id){return API.delete("/post/"+id)};export var commentPost=function commentPost(id,value){return API.post("/post/"+id+"/comment",value)};export var deleteComment=function deleteComment(postId,commentId){return API.delete("/post/"+postId+"/comment/"+commentId)};export var updateComment=function updateComment(postId,commentId,value){return API.put("/post/"+postId+"/comment/"+commentId,value)};export var likePost=function likePost(id){return API.post("/post/"+id+"/like")};