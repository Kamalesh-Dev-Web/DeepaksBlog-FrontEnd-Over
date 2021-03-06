import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Alata', sans-serif",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    width: "100vw",
    height: "100vh",
  },
  landingImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    
  },
  landingRightContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& h3": {
      fontSize: "2.5em",
    },
  },

  landingTextContainer: {
    color: "#454444",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  websiteContainer: {
    marginTop: "2em",
    background: "#454444",
    width: "60%",
    height: "13em",
    marginBottom: "4em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "0 0 0 3em",
    borderRadius: "15px",
    boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75)",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  blogContainer: {
    background: "#454444",
    width: "60%",
    height: "13em",
    marginBottom: "3em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0 3em 0 3em",
    borderRadius: "15px",
    boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75)",
    transition: " all .2s ease-in-out",
    textAlign: "right",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  landingButton: {
    background: "rgba(255,255,255,0.35)",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    borderRadius: "25px",
    color: "#454444",
    width: "7em",
    height: "2.5em",
    fontWeight: "bold",
    fontSize: "1.2em",
    marginTop: "1em",
    marginBottom: "1em",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
      color: "#DEBA3B",
    },
  },
  landingBlogButton: {
    background: "rgba(255,255,255,0.35)",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    borderRadius: "25px",
    color: "#454444",
    width: "6em",
    height: "2.5em",
    fontWeight: "bold",
    fontSize: "1.2em",
    marginTop: "1em",
    marginBottom: "1em",

    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
      color: "#DEBA3B",
    },
  },

  landingWebsiteText: {
    color: "#DEBA3B",
  },
  landingBlogText: {
    color: "#DEBA3B",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      width: "100vw",
      height: "60vh",
    },
    landingTextContainer: {
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      marginLeft: "3em",
      marginTop: "2em",
    },
    websiteContainer: {
      marginTop: "2em",
      background: "#454444",
      width: "90%",
      height: "23em",
      marginBottom: "4em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      padding: "0 0 0 1.5em",
      borderRadius: "15px",
    },
    landingRightContainer: {
      width: "100%",
      height: "auto",
    },
    blogContainer: {
      width: "90%",
      height: "23em",
      alignItems: "flex-end",
      padding: "0 1em 0 1em",
    },
    landingButton: {
      marginTop: "2em",
    },
    landingWebsiteText: {
      textAlign: "left",
    },
    landingBlogText: {
      textAlign: "right !important",
      width: "100%",
    },
  },
}));

export default useStyles;
