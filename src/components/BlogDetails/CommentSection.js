import React, { useState, useEffect, useRef } from "react";
import styles from "./CommentSection.module.css";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/post.js";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { deleteComment, updateComment } from "../../actions/post";

import EditIcon from "@material-ui/icons/Edit";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  color: "#454444",
  padding: "0",
  marginTop: "0.5em",
  marginRight: "0.5em",
  fontSize: "0.5em",
});

const CommentSection = ({ post }) => {
  const dispatch = useDispatch();
  const commentsRef = useRef();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user?.result.email);

  const toUpdateComment = comments.find((message) => message._id === commentId);
  console.log(toUpdateComment);

  console.log(commentId);
  console.log(toUpdateComment);

  useEffect(() => {
    if (toUpdateComment) {
      setComment(toUpdateComment.comment);
    }
  }, [toUpdateComment]);

  console.log(comment);
  console.log(comments);

  const handleComment = async () => {
    if (commentId === null) {
      const arrived = await dispatch(commentPost(post._id, { body: comment }));
      console.log(arrived);
      setComment("");

      setComment("");
      setComments(arrived);
    } else {
      await dispatch(updateComment(post._id, commentId, { body: comment }));
      const objIndex = comments.findIndex(
        (obj) => obj._id === toUpdateComment?._id
      );
      console.log(objIndex);
      comments[objIndex].comment = comment;
      const newComments = [...comments];
      setComments(newComments);
      setComment("");
    }
  };
  console.log(comments);
  return (
    <div>
      <div className={styles.comment}>
        <h3 style={{ fontSize: "1.3em", color: "#454444" }}>Add Comment</h3>
        <textarea
          className={styles.commentBox}
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className={styles.commentButton} onClick={handleComment}>
          Comment
        </button>
        <h3>Comments</h3>

        {comments.map((singleComment) => {
          return (
            <div
              key={singleComment._id}
              style={{
                width: "94vw",
              }}
            >
              <p
                style={{
                  fontSize: "1em",
                  marginTop: "1em",
                  marginBottom: "0.5em",
                  color: "#DEBA3B",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                {singleComment.fromUser.username}
              </p>
              <div
                style={{
                  background: "#DEBA3B",
                  padding: "0.5em",
                  borderRadius: "5px",
                  width: "96vw",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* <div
                  style={{
                    // width: "97vw",
                    height: "10vh",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                  }}
                > */}
                <p
                  style={{
                    width: "90%",
                    wordWrap: "break-word",
                    //  height:"10vh",
                    // height: "100%",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                  }}
                >
                  {singleComment.comment}
                </p>
                {/* </div> */}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {user.result.email === singleComment.fromUser.email ? (
                    <BootstrapButton
                      size="small"
                      color="secondary"
                      className={styles.deleteBox}
                      onClick={async () => {
                        await dispatch(
                          deleteComment(post._id, singleComment._id)
                        );
                        let newComment = comments.filter(
                          (comment) => comment._id !== singleComment._id
                        );
                        console.log(newComment);
                        setComments(newComment);
                      }}
                    >
                      <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </BootstrapButton>
                  ) : null}
                  {user.result.email === singleComment.fromUser.email ? (
                    <BootstrapButton
                      size="small"
                      color="secondary"
                      className={styles.deleteBox}
                      onClick={() => {
                        setCommentId(singleComment._id);
                      }}
                    >
                      <EditIcon
                        fontSize="small"
                        className={styles.deleteIcon}
                      />{" "}
                      &nbsp; Edit
                    </BootstrapButton>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;
