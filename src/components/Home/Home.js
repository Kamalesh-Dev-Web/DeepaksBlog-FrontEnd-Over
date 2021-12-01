import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import bioImage from "../../images/bio.jpg";
import facebookImage from "../../images/facebook-512.png";
import instagramImage from "../../images/instagram-512.png";
import twitterImage from "../../images/twitter-512.png";
import NavBar from "../NavBar/NavBar.js";
import Posts from "../Posts/Posts";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} className={classes.bio}>
            <Paper className={classes.paper}>
              <div className={classes.bioContainer}>
                <h1 className={classes.bioTitle}>About Me</h1>
                <img src={bioImage} alt="" className={classes.bioImage} />
                <p className={classes.bioText}>
                  Hi, I am N.Deepak I have experienced a lot at an early age
                  about life. And I have sound experience in what reality is.
                  When I was a pre-teenager, I heard many myths around me, and
                  now I came here to explore the truth and reveal it to
                  humankind. And this blog site is going to voice out about
                  Entertainment, sports, politics, and problems of oppression.{" "}
                  <button className={classes.websiteLink}>
                    check out my website
                  </button>
                </p>
                <div className={classes.socialMedia}>
                  <img
                    src={facebookImage}
                    alt="facebook icon"
                    className={classes.socialImage}
                  />
                  <img
                    src={instagramImage}
                    alt="facebook icon"
                    className={classes.socialImage}
                  />
                  <img
                    src={twitterImage}
                    alt="facebook icon"
                    className={classes.socialImage}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9} className={classes.maingrid}>
            <h1
              style={{
                textAlign: "center",
                marginTop: "1.5em",
                marginBottom: "0em",
                color: "#DEBA3B",
                fontWeight: "500",
              }}
            >
              My articles
            </h1>
            {/* the place forr cards or article post */}
            <div>
              <Posts />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
