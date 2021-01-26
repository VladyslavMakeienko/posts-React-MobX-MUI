import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { CommentsLinks } from "./CommentsLinks";

const useStyles = makeStyles({
  containerHeaderComments: {
    display: "flex",
  },
});

export const HeaderComments = observer(() => {
  const classes = useStyles();
  return (
    <div className={classes.containerHeaderComments}>
      <CommentsLinks />
    </div>
  );
});
