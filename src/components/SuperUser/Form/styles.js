import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      multiline: {
        height: "85vh",
        background: " #454444 ",
      },
      inputMultiline: {
        height: "100%",
        color: "#DEBA3B",
      },
      notchedOutline: {
        borderWidth: "0px",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#DEBA3B",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "5px",
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  contentContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",

    "& h3": {
      marginTop: "1em",
      fontSize: "2em",
      marginLeft: "1.5em",
    },
  },
  textField: {
    marginLeft: "3em",
  },
  textFieldTitle: {
    width: "90%",
    height: "3vh",
  },
  rightContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",

    "& h3": {
      fontSize: "2em",
    },
  },
  textFieldDescription: {
    width: "90%",
    height: "18vh",
  },
  titleContainer: {
    marginTop: "4em",
    marginLeft: "3em",
  },
  textFieldTag: {
    width: "90%",
    height: "10vh",
  },
  fileInput: {
    marginTop: "5em",
    marginLeft: "3em",
    display: "flex",
  },
  tagContainer:{
    marginTop: "2em",
    marginLeft: "2.5em"
  },
}));

export default useStyles;
