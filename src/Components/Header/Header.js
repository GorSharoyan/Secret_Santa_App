//React Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2px",
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}
