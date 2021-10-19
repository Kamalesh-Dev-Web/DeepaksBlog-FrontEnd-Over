import "./App.css";
import { useEffect } from "react";
import Routes from "./Routes/Routes";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
