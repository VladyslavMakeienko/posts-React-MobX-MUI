import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CommentBlock } from "./Elements for Comments/CommentBlock";
import { observer } from "mobx-react-lite";
import { GlobalContext } from "../../utils/context";

const useStyles = makeStyles(() => ({
  containerCommentsPageStyles: {
    display: "flex",
    flexDirection: " column",
    margin: " 40px 0",
    "@media(max-width: 600px)": {
      margin: " 40px 20px",
    },
  },
}));

export const CommentsPage = observer(() => {
  const classes = useStyles();
  const {
    store: {
      frontEndStore: { comments },
    },
  } = useContext(GlobalContext);
  return (
    <div className={classes.containerCommentsPageStyles}>
      {comments.map((comment, index) => {
        return <CommentBlock key={index} index={index} comment={comment} />;
      })}
    </div>
  );
});
