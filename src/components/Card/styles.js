import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCardActions: {
      root: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important",
        padding: "0 !important",
      },
    },
    MuiCardContent: {
      root: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important",
        padding: "0 ",
        marginTop: "1em",
      },
    },
    MuiButton: {
      label: {
        color: "#DEBA3B !important",
        fontWeight: "bold",
        textTransform: "capitalize !important",
        fontSize: "1em",
        fontWeight: "normal",
      },
    },
    MuiTypography: {
      body2: {
        fontFamily: "'Fira Sans', sans-serif",
      },
      h5: {
        fontFamily: "'Fira Sans', sans-serif",
      },
    },
    MuiButtonBase: {
      root: {
        padding: "0 !important",
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    flex: " 0 0 27.333333%",
    marginLeft: "3.5em",
    marginTop: "4em",
    height: "24em",
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    transition: " all .2s ease-in-out",
    color: "#454444",
    "&:hover": {
      transform: "scale(1.05)",
    },
    // fontFamily: "'Fira Sans', sans-serif",
  },
  cardImage: {
    height: "16em",
  },
  cardTitle: {
    width: "100%",
    height: "3em",
    overflow: "hidden",
    fontWeight: "600",
    fontSize: "1.5em",
    margin: "0 !important",
  },
  cardDescription: {
    width: "100%",
    height: "5em",
    overflow: "hidden",
  },
  cardAction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "10px !important",
  },
  like: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#454444",
  },
  overlay2: {
    position: "absolute",
    top: "5%",
    right: "0",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      flex: " 0 0 90%",
      marginLeft: "1.2em",
      marginTop: "4em",
      height: "24em",
      boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
      transition: " all .2s ease-in-out",
    },
  },
});
export default useStyles;
