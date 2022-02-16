import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import bioImage from "../../images/bio.jpeg";
import facebookImage from "../../images/facebook-512.png";
import instagramImage from "../../images/instagram-512.png";
import twitterImage from "../../images/twitter-512.png";
import NavBar from "../NavBar/NavBar.js";
import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";

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
                  Hey, I am N.Deepak I have encountered a challenging way at an
                  early age about existence. What's more, I have sound
                  involvement with what the truth is. When I was a teen, I heard
                  numerous fantasies around me, and presently I came here to
                  investigate reality and uncover it to humanity. Also, this
                  blog web page will voice out with regards to Entertainment,
                  sports, legislative issues, and issues of mistreatment.{" "}
                  <button className={classes.websiteLink}>
                    check out my website
                  </button>
                </p>
                <div className={classes.socialMedia}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100074281549822"
                    target="blank"
                  >
                    <img
                      src={facebookImage}
                      alt="facebook icon"
                      className={classes.socialImage}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/authorndeepak"
                    target="blank"
                  >
                    <img
                      src={instagramImage}
                      alt="facebook icon"
                      className={classes.socialImage}
                    />
                  </a>
                  <a
                    href="https://twitter.com/authorndeepak?t=mERSvOqvkr6CDc2NdTFGcw&s=08"
                    target="blank"
                  >
                    <img
                      src={twitterImage}
                      alt="facebook icon"
                      className={classes.socialImage}
                    />
                  </a>
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
