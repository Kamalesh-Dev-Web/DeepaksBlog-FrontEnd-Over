import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Fira Sans', sans-serif",
    width: "98vw",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#454444",
    height: "140vh",
    width: "100%",
    fontSize:"0.8em",
    // fontFamily: "Pompiere !important",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    backgroundImage: "url(/images/aboutme7.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  bioImage: {
    marginTop: "2em",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)",
  },

  bioText: {
    marginTop: "2em",
    fontWeight: "bold",
    fontSize: "1.3em",
    lineHeight: "1.9em",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  bioTitle: {
    fontSize: "2.2em",
  },
  websiteLink: {
    width: "9em",
    marginTop: "1em",
    height: "3em",
    background: "#454444 ",
    border: "none",
    borderRadius: "25px",
    fontFamily: "inherit",
    fontSize: "0.9em",
    fontWeight: "bold",
    color: "#DEBA3B",
    cursor: "pointer",
    transition: " all .2s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  maingrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  socialMedia: {
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    justifySelf: "center",
    marginTop: "2em",
  },

  socialImage: {
    width: "54px",
    height: "54px",
    cursor: "pointer",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  bioContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },
}));

export default useStyles;
