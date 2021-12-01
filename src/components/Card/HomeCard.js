import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../actions/post";
import { likePost } from "../../actions/post";
// import { Link } from "react-router";
// import user from "../../reducers/user";

const HomeCard = ({ post }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentId } = useSelector((state) => state.user);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [posts, setPosts] = useState(post);
  console.log(posts);
  console.log(currentId);
  console.log(currentPostId);

  const openPost = (e) => {
    // dispatch(getPost(posts._id, history));

    history.push(`/blogs/${post._id}`);
    window.location.reload();
  };

  const likeSinglePost = async () => {
    const received = await dispatch(likePost(posts._id));
    setCurrentPostId(posts._id);

    console.log(received);
  };
  return (
    <Card className={classes.root}>
      <ThemeProvider theme={theme}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={posts.image}
              title="Contemplative Reptile"
              className={classes.cardImage}
            />
            <CardContent>
              <div className={classes.overlay2} name="edit">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();

                    try {
                      console.log(posts._id);
                      dispatch({ type: "SET_ID", payload: posts._id });
                      history.push("/addPost");
                    } catch (error) {
                      console.log(error);
                    }

                    // setCurrentId(posts._id);
                  }}
                  style={{ color: "white" }}
                  size="small"
                >
                  <MoreHorizIcon fontSize="default" />
                </Button>
              </div>

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.cardTitle}
              >
                {posts.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.cardDescription}
              >
                {posts.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </ButtonBase>
        <CardActions className={classes.cardFooter}>
          <Button size="small" color="primary">
            Read More
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(posts._id))}
          >
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
          <Button onClick={likeSinglePost}>
            <ThumbUpAltIcon fontSize="small" /> &nbsp; {posts.likes.length}{" "}
            likes
          </Button>
          {/* <div className={classes.like}>
            <ThumbUpAltIcon fontSize="small" style={{ marginRight: "0.3em" }} />
            Like
          </div> */}
        </CardActions>
      </ThemeProvider>
    </Card>
  );
};

export default HomeCard;
