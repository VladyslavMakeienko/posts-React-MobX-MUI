import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { observer } from "mobx-react-lite";
import { GlobalContext } from "../../utils/context";

const useStyles = makeStyles(() => ({
  containerCommentsCountStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconCommentStyles: {
    color: "#21CBF3",
    padding: "3px",
    width: "20px",
    height: "20px",
  },
  commentCountStyle: {
    fontFamily: "Arial",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px",
    letterSpacing: "0px",
  },
}));

export const CommentsCount = observer(() => {
  const classes = useStyles();

  const {
    store: {
      frontEndStore: { commentsCount },
    },
  } = useContext(GlobalContext);

  return (
    <div className={classes.containerCommentsCountStyles}>
      <ModeCommentIcon className={classes.iconCommentStyles} />
      <span className={classes.commentCountStyle}>{commentsCount}</span>
    </div>
  );
});
