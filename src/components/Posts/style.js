import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Fira Sans', sans-serif",
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "75vw",
  },
}));

export default useStyles;
