import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAppBar: {
      root: {
        background: "#454444 !important",
      },
    },
    MuiButton: {
      label: {
        textTransform: "capitalize",
        fontSize: "1.2em",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Fira Sans', sans-serif !important",
  },
  buttonContainer: {
    background: "#DEBA3B",
    width: "10em",
    height: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    color: "white !important",
    cursor: "pointer",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Fira Sans', sans-serif !important",
  },
}));

export default useStyles;
