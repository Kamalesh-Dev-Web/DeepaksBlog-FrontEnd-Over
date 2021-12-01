import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogDetails.module.css";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/post";
import CommentSection from "./CommentSection";

const BlogDetails = (props) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const { id } = useParams();

 

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

 

  return (
    <>
      <NavBar />
      {post ? (
        <div className={styles.blogContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <img className={styles.blogImage} src={post.image} alt="blogImage" />
          <p className={styles.content}>{post.body}</p>
          <CommentSection post={post}/>
        </div>
      ) : null}
    </>
  );
};

export default BlogDetails;
