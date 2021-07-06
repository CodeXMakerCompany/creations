import { makeStyles } from "@material-ui/core";

export const navBarStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
}));

export const marginPaddingZero = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  }
}));