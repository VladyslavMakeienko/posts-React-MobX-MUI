import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { CommentsCount } from "./CommentsCount";
import { LikesCount } from "./LikesCount";

const useStyles = makeStyles({
  containerCountPageStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const CountPage = observer(() => {
  const classes = useStyles();
  return (
    <div className={classes.containerCountPageStyles}>
      <LikesCount />
      <CommentsCount />
    </div>
  );
});
