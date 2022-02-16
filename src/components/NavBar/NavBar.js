import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles.js";
import { useHistory, useLocation } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { postToken } from "../../actions/post.js";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import logoImage from "../../images/logo.png";

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/blogs");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    console.log(res);
  };
  const googleFailure = () => {
    console.log("google sign in failed");
  };

  useEffect(() => {
    console.log(user);
    const token = user?.token;
    console.log(token);
    const superUser = async () => {
      await dispatch(postToken());
    };

    console.log(superUser);

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/blogs");
    setUser(null);
    window.location.reload();
  };

  return (
    <div>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <img
                src={logoImage}
                alt=""
                onClick={() => {
                  history.push("/blogs");
                }}
                style={{ cursor: "pointer", width: "200px" }}
              />
              <Typography
                variant="h6"
                className={classes.title}
                onClick={() => {
                  history.push("/blogs");
                }}
                style={{ cursor: "pointer" }}
              >
                {/* Deepak's Blog */}
              </Typography>
              <h3 style={{ marginRight: "1em" }}>
                Hi!&nbsp;{user?.result.name}
              </h3>
              {user && (
                <div className={classes.buttonContainer}>
                  <h3 className={classes.loginLink} onClick={logOut}>
                    Logout
                  </h3>
                </div>
              )}
              {!user && (
                <GoogleLogin
                  clientId="771470238529-sj11s31cdmlk419k7q8n9drc4q1thrfr.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <div
                      className={classes.buttonContainer}
                      onClick={renderProps.onClick}
                    >
                      <h3 className={classes.loginLink}>Login / SignUp</h3>
                    </div>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              )}
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default NavBar;
