import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles.js";
import LandingImage from "../../images/depak-landing.png";
import { useHistory } from "react-router";
// import bookImage from "../../images/books.jpg";

const LandingPage = () => {
  const classes = useStyles();

  let history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.container}>
          <img src={LandingImage} alt="" className={classes.landingImage} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <div
            className={classes.landingRightContainer}
            style={{ backgroundImage: "url(/images/yellow11.png)" }}
          >
            {/* <img
              src={bookImage}
              alt=""
              style={{
                position: "absolute",
                zIndex: "-10",
                width: "59vw",
                top: "0",
                right: "0%",
                height: "100vh",
                objectFit: "cover",
                opacity: "0.6",
              }}
            />
            <div
              style={{
                position: "absolute",
                zIndex: "-10",
                width: "59vw",
                top: "0",
                right: "0%",
                height: "100vh",
                objectFit: "cover",
                opacity: "0.4",
                background: "#DEBA3B",
              }}
            ></div> */}
            <div className={classes.landingTextContainer}>
              <h3 style={{ marginTop: "1.5em" }}>Hi there, N.Deepak here</h3>
              <h3>I warmly welcome you</h3>
            </div>
            <div className={classes.websiteContainer}>
              <h3 className={classes.landingWebsiteText}>
                Feel free to visit my website{" "}
              </h3>
              <button
                className={classes.landingButton}
                onClick={() =>
                  window.open(
                    "https://authorndeepakwebsite.netlify.app/",
                    "_blank"
                  )
                }
              >
                My Website
              </button>
            </div>
            <div className={classes.blogContainer}>
              <h3 className={classes.landingBlogText}>
                Feel free to visit my blog site{" "}
              </h3>
              <button
                className={classes.landingBlogButton}
                onClick={() => {
                  history.push("/blogs");
                }}
              >
                My Blog
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
