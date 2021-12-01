import React from "react";
import constructionImage from "../../../images/construction.jpg";

const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={constructionImage}
        alt=""
        style={{ width: "40vw", height: "40vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default Home;
