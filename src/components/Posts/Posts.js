import HomeCard from "../Card/HomeCard.js";
// import { postArrayDummy } from "../../data/PostArray";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { likePost } from "../../actions/post";

const Posts = () => {
  //   const posts = useSelector((state) => state.post.postArray);
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { posts } = useSelector((state) => state?.posts);
  console.log(posts);
  // const allPosts = useSelector((state) => state?.posts.posts);
  // const [likeposts, setLikeposts] = useState(posts);
  // console.log(likeposts);

  // useEffect(() => {
  //   setLikeposts(posts);
  // }, [likeposts]);
  // console.log(posts);

  // const likeSinglePost = async () => {
  //   const received = await dispatch(likePost(posts._id));
  //   setCurrentPostId(posts._id);

  //   console.log(received);
  // };

  const id = useSelector((state) => state.user.currentId);
  console.log(id);

  // const posts = postArrayDummy;

  return (
    <>
      <div className={classes.cardContainer}>
        {posts?.map((post) => (
          <HomeCard post={post} key={post._id} />
        ))}
      </div>
     
    </>
  );
};

export default Posts;
