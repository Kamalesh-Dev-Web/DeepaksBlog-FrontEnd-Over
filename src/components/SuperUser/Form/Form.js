import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import useStyles from "./styles.js";
import { theme } from "./styles";
import FileBase from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost, updatingPost } from "../../../actions/post.js";


const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentId } = useSelector((state) => state.user);
  console.log(currentId);
  const [postData, setPostData] = useState({
    body: "",
    title: "",
    description: "",
    tag: "",
    image: "",
  });

  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );

 

  useEffect(() => {
    if (post) setPostData(post);
  }, []);

  const clear = () => {
    setPostData({
      body: "",
      title: "",
      description: "",
      tag: "",
      image: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    if (currentId === 0) {
      dispatch(addPost(postData, history));
      clear();
    } else {
      dispatch(updatingPost(currentId, postData, history));
      clear();
    }
  };
  return (
    <div className={classes.root}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <h3>body:</h3>
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                className={classes.textField}
                value={postData.body}
                onChange={(e) =>
                  setPostData({ ...postData, body: e.target.value })
                }
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.rightContainer}>
            <div className={classes.titleContainer}>
              <h3>title:</h3>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                className={classes.textFieldTitle}
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
                inputProps={{
                  style: {
                    height: "3vh",
                    padding: "0",
                    margin: "0",
                  },
                }}
              />
            </div>
            <div className={classes.titleContainer}>
              <h3>Description:</h3>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                className={classes.textFieldDescription}
                value={postData.description}
                onChange={(e) =>
                  setPostData({ ...postData, description: e.target.value })
                }
                inputProps={{
                  style: {
                    height: "100%",
                    padding: "0",
                    margin: "0",
                  },
                }}
              />
            </div>
            <div className={classes.tagContainer}>
              <h3>Tag:</h3>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                className={classes.textFieldTag}
                value={postData.tag}
                onChange={(e) => {
                  setPostData({ ...postData, tag: e.target.value });
                }}
                inputProps={{
                  style: {
                    height: "100%",
                    padding: "0",
                    margin: "0",
                  },
                }}
              />
            </div>
            <div className={classes.fileInput}>
              <h5>Add Image:</h5>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, image: base64 })
                }
              />
            </div>
            <button
              style={{
                marginTop: "1.5em",
                width: "15%",
                alignSelf: "flex-end",
                marginRight: "5em",
                border: "0px",
                height: "3em",
                borderRadius: "25px",
                background: "#454444",
                color: "#DEBA3B",
              }}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
