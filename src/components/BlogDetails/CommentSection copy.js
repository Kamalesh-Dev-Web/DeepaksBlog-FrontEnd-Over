import React, { useState, useEffect } from "react";
import styles from "./CommentSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { commentPost } from "../../actions/post.js";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Button from "@material-ui/core/Button";
import { deleteComment, updateComment } from "../../actions/post";
import { useHistory } from "react-router-dom";

const CommentSection = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [commentFinal, setCommentFinal] = useState({});
  const receivedComment = useSelector((state) => state.posts.commentFinal);
  console.log(receivedComment);
  console.log(commentFinal);
  console.log(post?.comments);

  const [singleComment, setSingleComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const [commentId, setCommentId] = useState(null);

  const updatedComment = commentId
    ? post?.comments.find((obj) => obj._id === commentId)
    : null;
  console.log(updatedComment);

  useEffect(() => {
    if (updatedComment) setSingleComment(updatedComment.comment);
  }, [commentId]);

  const handleComment = async () => {
    if (commentId === null) {
      await dispatch(commentPost(post._id, { body: singleComment }));

      setSingleComment("");
      setCommentFinal(receivedComment);
      setComments([...comments, commentFinal]);

      console.log(comments);
      console.log(post.comments);
    } else {
      await dispatch(
        updateComment(post._id, commentId, { body: singleComment })
      );
      // console.log(updatedComments);
      setSingleComment("");
      // setComments();
      // window.location.reload();
      // history.push(`/blogs/${post._id}`);
    }
  };

  console.log(comments);
  console.log(commentId);

  return (
    <div>
      <div className={styles.comment}>
        <h3 style={{ fontSize: "1.3em", color: "#454444" }}>Add Comment</h3>
        <textarea
          className={styles.commentBox}
          multiline
          value={singleComment}
          onChange={(e) => setSingleComment(e.target.value)}
        ></textarea>
        <button onClick={handleComment} className={styles.commentButton}>
          Comment
        </button>
        <h3>Comments</h3>
        {comments.map((singlePost) => {
          return (
            <>
              <p>{singlePost.comment}</p>
              <Button
                size="small"
                color="secondary"
                onClick={async () => {
                  await dispatch(
                    deleteComment(singlePost.postId, singlePost._id)
                  );
                  window.location.reload();
                }}
                className={styles.deleteBox}
              >
                <DeleteIcon fontSize="small" /> &nbsp; Delete
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => {
                  setCommentId(singlePost._id);
                }}
                className={styles.deleteBox}
              >
                <EditIcon fontSize="small" /> &nbsp; Edit
              </Button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;
