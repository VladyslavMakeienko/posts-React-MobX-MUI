import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProfilePage } from "./components/Profile Page/ProfilePage";
import { MessagePage } from "./components/Message Page/MessagePage";
import { ServicesPage } from "./components/Services Page/ServicesPage";
import { HeaderComments } from "./components/Comments Page/Elements for Comments/HeaderComments";

const useStyles = makeStyles({
  allStyle: {
    display: "flex",
    flexDirection: "column",
  },
  paperStyles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.allStyle}>
      <Paper className={classes.paperStyles}>
        <Grid item>
          <ProfilePage />
        </Grid>
        <Grid item>
          <ServicesPage />
        </Grid>
        <Grid item>
          <HeaderComments />
        </Grid>
        <Grid item>
          <MessagePage />
        </Grid>
      </Paper>
    </Grid>
  );
};
